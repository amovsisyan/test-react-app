import React, {useState} from 'react';
import {Card, Modal, Input, Space, Button, Image} from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

interface IAdvertisementItemComponent {
    advertisement: AdvertisementInterface | null
    onDelete: (id: number) => void;
    onImageRemove: (id: number) => void;
    onInputChange: (key: string, value: string) => void;
    onUpdate: () => void;
}

export const AdvertisementItemComponent: React.FC<IAdvertisementItemComponent> = (props) => {
    const [deletingItemId, setDeletingItemId] = useState(0);
    const [deletingImageId, setDeletingImageId] = useState(0);
    const {advertisement} = props;

    const showModal = (id: number) => {
        setDeletingItemId(id);
    };

    const handleOk = () => {
        props.onDelete(deletingItemId);
        handleCancel();
    };

    const handleCancel = () => {
        setDeletingItemId(0);
    };

    const showImageRemoveModal = (id: number) => {
        setDeletingImageId(id);
    };

    const handleImageRemoveOk = () => {
        props.onImageRemove(deletingImageId);
        handleCancel();
    };

    const handleImageRemoveCancel = () => {
        setDeletingImageId(0);
    };

    return (
        <>
            {
                advertisement ? <Card title={'Advertisement'} extra={
                    <DeleteTwoTone twoToneColor="#ff0000" style={{cursor: 'pointer'}} onClick={() => {showModal(advertisement.id)}}/>
                }>
                    <Space direction="vertical" style={{width: '50%'}}>
                        <Input placeholder="Title" value={advertisement?.title} onChange={(e) => props.onInputChange('title', e.target.value)}/>
                        <Input placeholder="Description" value={advertisement?.description} onChange={(e) => props.onInputChange('description', e.target.value)} />
                        <div>
                            <Space direction="horizontal">
                                {
                                    advertisement?.photos.map((photo) => {
                                        return <div style={{position: 'relative'}}>
                                            <Image
                                                width={200}
                                                src={photo.urlabs}
                                            />
                                            <div style={{position: 'absolute', top: '4px', right: '4px'}}>
                                                <DeleteTwoTone
                                                    twoToneColor="#ff0000"
                                                    style={{cursor: 'pointer', fontSize: '24px'}}
                                                    onClick={() => {showImageRemoveModal(photo.id)}}/>
                                            </div>
                                        </div>
                                    })
                                }
                            </Space>
                        </div>
                        <Button  type="primary" onClick={props.onUpdate}>Update</Button>
                    </Space>
                </Card> : <>Loading ...</>
            }
            <Modal title="Are you sure?" visible={!!deletingItemId} onOk={handleOk} onCancel={handleCancel} />
            <Modal title="Are you sure?" visible={!!deletingImageId} onOk={handleImageRemoveOk} onCancel={handleImageRemoveCancel} />
        </>
    );
};