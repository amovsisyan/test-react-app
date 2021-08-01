import React, {useState} from "react";
import {Card, Input, Button, Space, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import {advertisements_store} from "../../../services/http/mainApi";

const { TextArea } = Input;

const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

export const AdvertisementCreateContainer: React.FC<unknown> = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState<{originFileObj: File}[]>([]);
    const history = useHistory();

    const uploadProps = {
        name: 'file',
        customRequest: dummyRequest,
        multiple: true,
        onChange(info) {
            setPhotos(info.fileList)
        },
    };

    const saveHandler = async () => {
        const reqBody = new FormData();
        reqBody.append('title', title);
        reqBody.append('description', description);
        photos.forEach((photo) => reqBody.append('photos[]', photo.originFileObj));

        const res = await advertisements_store(reqBody);
        history.push(`/advertisements/${res.data.id}`);
    };

    return (
        <Card title={"Create Advertisement"}>
            <Space direction="vertical" style={{width: '100%'}}>
                <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <TextArea placeholder="Description" rows={6} value={description} onChange={(e) => setDescription(e.target.value)} />
                {/*@ts-ignore*/}
                <Upload {...uploadProps}>
                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                </Upload>
                <Button  type="primary" onClick={saveHandler}>Submit</Button>
            </Space>
        </Card>
    );
};