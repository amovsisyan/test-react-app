import {AdvertisementListContainer} from "./containers/Advertisement/AdvertisementListContainer";
import {AdvertisementItemContainer} from "./containers/Advertisement/AdvertisementItemContainer";
import {AdvertisementCreateContainer} from "./containers/Advertisement/AdvertisementCreateContainer";
import {AdvertisementUpdateContainer} from "./containers/Advertisement/AdvertisementUpdateContainer";

const ROUTE_ADVERTISEMENT_CREATE = '/advertisements/create';
const ROUTE_ADVERTISEMENT = '/advertisements/:id';
const ROUTE_ADVERTISEMENT_UPDATE = '/advertisements/:id/update';
const ROUTE_ADVERTISEMENTS = '/advertisements';

interface IRouteList {
    path: string
    name: string
    Component: React.ReactNode
}

export const routeList: IRouteList[] = [
    {
        path: ROUTE_ADVERTISEMENT_CREATE,
        name: 'Recording',
        Component: AdvertisementCreateContainer,
    },
    {
        path: ROUTE_ADVERTISEMENT,
        name: 'Recording',
        Component: AdvertisementItemContainer,
    },
    {
        path: ROUTE_ADVERTISEMENT_UPDATE,
        name: 'Share',
        Component: AdvertisementUpdateContainer,
    },
    {
        path: ROUTE_ADVERTISEMENTS,
        name: 'Advertisements',
        Component: AdvertisementListContainer,
    },
]