import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import {advertisements_delete, advertisements_getById} from "../../../services/http/mainApi";
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";
import {AdvertisementItemComponent} from "../../components/Advertisement/AdvertisementItemComponent";

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
    
    return (
        <AdvertisementItemComponent
            advertisement={advertisement}
            onDelete={onDeleteHandler}
        />
    );
};