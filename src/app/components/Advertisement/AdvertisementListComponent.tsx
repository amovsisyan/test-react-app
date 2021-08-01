import React, {useState} from 'react';
import {Table, Modal, Button} from "antd";
import {Link} from "react-router-dom";
import {format, compareAsc} from "date-fns";
import { CheckCircleTwoTone, CloseCircleTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

interface IAdvertisementListComponent {
    advertisements: AdvertisementInterface[];
    onDelete: (id: number) => void;
}

export const AdvertisementListComponent: React.FC<IAdvertisementListComponent> = (props) => {
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


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render:(title, record) => {
                return <Link to={`/advertisements/${record.key}`}>{title}</Link>
            },
            sorter: (a, b) => {
                if (a.title > b.title) {
                    return 1;
                }
                if (a.title < b.title) {
                    return -1;
                }

                return 0;
            },
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Photos',
            dataIndex: 'photos',
            key: 'photos',
            render: photos => <span>{photos.length ? <CheckCircleTwoTone twoToneColor="#52c41a" /> : <CloseCircleTwoTone twoToneColor="#ff0000" />}</span>,
        },
        {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
            sorter: (a, b) => compareAsc(
                new Date(a.created_at),
                new Date(b.created_at)
            ),
        },
        {
            title: 'Actions',
            dataIndex: 'actions',
            key: 'actions',
            render: (id) => <>
                <Link to={`/advertisements/${id}`}><EditTwoTone twoToneColor="#0000FF" style={{cursor: 'pointer'}} /></Link>
                <span style={{margin: '0 8px'}}>|</span>
                <DeleteTwoTone twoToneColor="#ff0000" style={{cursor: 'pointer'}} onClick={() => {showModal(id)}}/>
            </>,
        },
    ];

    const {advertisements} = props;
    const data = advertisements.map((advertisement) => {
        return {
            key: advertisement.id,
            title: advertisement.title,
            description: advertisement.description,
            photos: advertisement.photos,
            created_at: advertisement.created_at ? format(new Date(advertisement.created_at), 'dd-MM-Y') : 'No date',
            actions: advertisement.id,
        }
    });

    return (
        <>
            <Link to={`/advertisements/create`}>
                <Button type="primary" style={{marginBottom: '16px'}}>
                    Create
                </Button>
            </Link>

            <Table columns={columns} dataSource={data} />
            <Modal title="Are you sure?" visible={!!deletingItemId} onOk={handleOk} onCancel={handleCancel} />
        </>
    );
};
