import { SafeUser, SafeListing } from "@/app/types/Types";
import { Reservation } from "@prisma/client";

export interface IListing {
    data: SafeListing;
    reservation?: Reservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}