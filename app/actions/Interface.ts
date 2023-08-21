export interface IGetListings {
    userId?: string;
}

export interface IGetListingById {
    listingId?: string;
}

export interface IGetReservations {
    listingId?: string;
    userId?: string;
    authorId?: string;
}