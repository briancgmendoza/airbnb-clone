export interface IGetListings {
    userId?: string;
    guestCount?: number;
    roomCount?: number;
    bathroomCount?: number;
    startDate?: string;
    endDate?: string;
    locationValue?: string;
    category?: string;
}

export interface IGetListingById {
    listingId?: string;
}

export interface IGetReservations {
    listingId?: string;
    userId?: string;
    authorId?: string;
}