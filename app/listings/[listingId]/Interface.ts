import { SafeListing, SafeReservation, SafeUser } from "@/app/types/Types";

export interface IListingPage {
    listingId?: string;
}

export interface IListingClient {
    reservations?: SafeReservation[];
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}