import { SafeUser } from "@/app/types/Types";
import { Listing, Reservation } from "@prisma/client";

export type SafeListing = Omit<
    Listing,
    'createdAt' | 'updatedAt' | 'emailVerified'> & {
        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;
    }

export interface IListing {
    data: Listing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}