import React, {useState} from 'react';
import {Card, Modal} from 'antd';
import { DeleteTwoTone } from '@ant-design/icons';
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

interface IAdvertisementItemComponent {
    advertisement: AdvertisementInterface | null
    onDelete: (id: number) => void;
}

export const AdvertisementItemComponent: React.FC<IAdvertisementItemComponent> = (props) => {
    const [deletingItemId, setDeletingItemId] = useState(0);

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

    const {advertisement} = props;
    return (
        <>
            {
                advertisement ? <Card title={advertisement.title} extra={
                    <DeleteTwoTone twoToneColor="#ff0000" style={{cursor: 'pointer'}} onClick={() => {showModal(advertisement.id)}}/>
                }>
                    <p>{advertisement.description}</p>
                </Card> : <>Loading ...</>
            }
            <Modal title="Are you sure?" visible={!!deletingItemId} onOk={handleOk} onCancel={handleCancel} />
        </>
    );
};