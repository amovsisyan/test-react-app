import React from 'react';
import {Table} from "antd";
import {format, compareAsc} from "date-fns";
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

interface IAdvertisementListComponent {
    advertisements: AdvertisementInterface[];
}

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: title => <a>{title}</a>,
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
];

export const AdvertisementListComponent: React.FC<IAdvertisementListComponent> = (props) => {
    const {advertisements} = props;
    const data = advertisements.map((advertisement) => {
        return {
            key: advertisement.id,
            title: advertisement.title,
            description: advertisement.description,
            photos: advertisement.photos,
            created_at: advertisement.created_at ? format(new Date(advertisement.created_at), 'dd-MM-Y') : 'No date',
        }
    });

    return (
        <Table columns={columns} dataSource={data} />
    );
};
