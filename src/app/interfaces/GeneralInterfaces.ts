export interface PhotoInterface {
    id: number;
    url: string
    advertisement_id: number;
    created_at: string | null;
    updated_at: string | null;
}

export interface AdvertisementBodyInterface {
    title: string;
    description: string;
    photos: File[]
}

export interface AdvertisementInterface{
    id: 1;
    title: string;
    description: string;
    created_at: string | null;
    updated_at: string | null;
    photos: PhotoInterface[]
}