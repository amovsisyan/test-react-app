import React, {useState} from "react";
import {Card, Input, Button, Space, Upload} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
        onSuccess("ok");
    }, 0);
};

interface IAdvertisementCreateComponent {
    onSsave: (title: string, description: string, photos: {originFileObj: File}[]) => void
}

export const AdvertisementCreateComponent: React.FC<IAdvertisementCreateComponent> = (props) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [photos, setPhotos] = useState<{originFileObj: File}[]>([]);

    const uploadProps = {
        name: 'file',
        customRequest: dummyRequest,
        multiple: true,
        onChange(info) {
            setPhotos(info.fileList)
        },
    };

    const saveHandler = async () => {
        props.onSsave(title, description, photos)
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