import React, {useEffect, useState} from 'react';
import {AdvertisementListComponent} from "../../components/Advertisement/AdvertisementListComponent";
import {advertisements_delete, advertisements_getAll} from "../../../services/http/mainApi";
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

export const AdvertisementListContainer: React.FC<unknown> = (props) => {
    const [advertisements, setAdvertisements] = useState([] as AdvertisementInterface[]);

    const getAdvertisements = async () => {
        const res = await advertisements_getAll();
        setAdvertisements(res.data)
    };

    useEffect(() => {
        getAdvertisements();
    }, []);

    const onDeleteHandler = async (id: number) => {
        const res = await advertisements_delete(id);
        if (res.status === 200) {
            const filteredAdvertisements = advertisements.filter((advertisement) => advertisement.id !== id)
            setAdvertisements(filteredAdvertisements);
        }
    };

    return (
        <AdvertisementListComponent
            advertisements={advertisements}
            onDelete={onDeleteHandler}
        />
    );
};
