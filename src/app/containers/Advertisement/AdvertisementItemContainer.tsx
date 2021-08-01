import React, {useEffect, useState} from 'react';
import {Card} from 'antd';
import {useParams} from 'react-router-dom';
import {advertisements_getById} from "../../../services/http/mainApi";
import {AdvertisementInterface} from "../../interfaces/GeneralInterfaces";

export const AdvertisementItemContainer: React.FC<unknown> = (props) => {
    const {id} = useParams();
    const [advertisement, setAdvertisement] = useState<AdvertisementInterface | null>(null);

    const getById = async () => {
        const advertisement = await advertisements_getById(id);
        setAdvertisement(advertisement.data);
    };
    
    useEffect(() => {
        getById()
    }, []);
    
    return (
        <>
            {
                advertisement ? <Card title={advertisement.title} extra={
                    <a href="#">More</a>} style={{ width: '100%' }
                }>
                    <p>{advertisement.description}</p>
                </Card> : <>Loading ...</>
            }

        </>
    );
};