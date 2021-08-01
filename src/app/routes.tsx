import {AdvertisementListContainer} from "./containers/Advertisement/AdvertisementListContainer";
import {AdvertisementItemContainer} from "./containers/Advertisement/AdvertisementItemContainer";
import {AdvertisementCreateContainer} from "./containers/Advertisement/AdvertisementCreateContainer";
import {AdvertisementUpdateContainer} from "./containers/Advertisement/AdvertisementUpdateContainer";

const ROUTE_ADVERTISEMENTS = '/advertisements';
const ROUTE_ADVERTISEMENT_CREATE = '/advertisement/create';
const ROUTE_ADVERTISEMENT = '/advertisement/:id';
const ROUTE_ADVERTISEMENT_UPDATE = '/advertisement/:id/update';

interface IRouteList {
    path: string
    name: string
    Component: React.ReactNode
}

export const routeList: IRouteList[] = [
    {
        path: ROUTE_ADVERTISEMENTS,
        name: 'Advertisements',
        Component: AdvertisementListContainer,
    },
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
]