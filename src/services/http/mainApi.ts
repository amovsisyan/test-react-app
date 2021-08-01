import axios, {AxiosPromise} from 'axios';
import {AdvertisementInterface, PhotoInterface} from "../../app/interfaces/GeneralInterfaces";

const mainApi = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // todo should be .env variable, but hard coding for now
  headers: { Accept: 'application/json' },
});

export const advertisements_getAll = (): AxiosPromise<AdvertisementInterface[]> => mainApi.get('advertisements');
export const advertisements_getById = (id: number): AxiosPromise<AdvertisementInterface> => mainApi.get(`advertisements/${id}`);
export const advertisements_store = (body: FormData): AxiosPromise<AdvertisementInterface> => mainApi.post(`advertisements`, body, {
  headers: { "Content-Type": "multipart/form-data" },
});
export const advertisements_delete = (id: number): AxiosPromise<AdvertisementInterface[]> => mainApi.delete(`advertisements/${id}`);
export const photo_delete = (id: number): AxiosPromise<PhotoInterface> => mainApi.delete(`photos/${id}`);
