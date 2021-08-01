import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory, Link } from "react-router-dom";
import {Typography} from "antd";
import {advertisements_delete, advertisements_getById, photo_delete} from "../../../services/http/mainApi";
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";
import {AdvertisementItemComponent} from "../../components/Advertisement/AdvertisementItemComponent";

const { Title } = Typography;

export const AdvertisementItemContainer: React.FC<unknown> = (props) => {
    const {id} = useParams();
    const [advertisement, setAdvertisement] = useState<AdvertisementInterface | null>(null);
    const history = useHistory();

    const getById = async () => {
        const advertisement = await advertisements_getById(id);
        setAdvertisement(advertisement.data);
    };
    
    useEffect(() => {
        getById()
    }, []);

    const onDeleteHandler = async (id: number) => {
        const res = await advertisements_delete(id);
        if (res.status === 200) {
            history.push(`/advertisements`);
        }
    };

    const onInputChangeHandler = (key: string, value: string) => {
        if (advertisement) {
            const advertisementNew = {...advertisement};
            advertisementNew[key] = value;
            setAdvertisement(advertisementNew);
        }
    };
    
    const onUpdateHandler = () => {
        console.log(advertisement);
    };
    
    const onImageRemoveHandler = async (id: number) => {
        const res = await photo_delete(id);
        if (res.status === 200) {
            if (advertisement) {
                const advertisementNew = {...advertisement};
                advertisementNew.photos = advertisementNew.photos?.filter((photo) => photo.id !== id);
                setAdvertisement(advertisementNew);
            }
        }
    };
    
    return (
        <>
            <Link to={`/advertisements`}><Title level={4}>Advertisements List</Title></Link>
            <AdvertisementItemComponent
                advertisement={advertisement}
                onDelete={onDeleteHandler}
                onImageRemove={onImageRemoveHandler}
                onInputChange={onInputChangeHandler}
                onUpdate={onUpdateHandler}
            />
        </>
    );
};