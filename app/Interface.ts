import { IGetListings } from "./actions/Interface";

export interface IHomePage {
    searchParams: IGetListings;
}

export interface IErrorState {
    error: Error;
}