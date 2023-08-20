import { SafeListing, SafeUser } from "@/app/types/Types";
import { Reservation } from "@prisma/client";

export interface IListingPage {
    listingId?: string;
}

export interface IListingClient {
    reservation?: Reservation[]
    listing: SafeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}