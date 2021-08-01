import React from "react";
import { useHistory } from "react-router-dom";
import {advertisements_store} from "../../../services/http/mainApi";
import {AdvertisementCreateComponent} from "../../components/Advertisement/AdvertisementCreateComponent";

export const AdvertisementCreateContainer: React.FC<unknown> = (props) => {
    const history = useHistory();

    const saveHandler = async (title, description, photos) => {
        const reqBody = new FormData();
        reqBody.append('title', title);
        reqBody.append('description', description);
        photos.forEach((photo) => reqBody.append('photos[]', photo.originFileObj));

        const res = await advertisements_store(reqBody);
        history.push(`/advertisements/${res.data.id}`);
    };

    return (
        <AdvertisementCreateComponent
            onSsave={saveHandler}
        />
    );
};