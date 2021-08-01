import React, {useEffect, useState} from 'react';
import {AdvertisementListComponent} from "../../components/Advertisement/AdvertisementListComponent";
import {advertisements_getAll} from "../../../services/http/mainApi";
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

    return (
        <AdvertisementListComponent
            advertisements={advertisements}
        />
    );
};
