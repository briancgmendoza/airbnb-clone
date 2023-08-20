import { SafeUser, SafeListing, SafeReservation } from "@/app/types/Types";
import { IconType } from "react-icons";
import { Range } from "react-date-range";

export interface IListingCard {
    data: SafeListing;
    reservation?: SafeReservation;
    onAction?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

export interface IListingHead {
    title: string;
    imageSrc: string;
    locationValue: string;
    id: string;
    currentUser?: SafeUser | null;
}

export interface IListingInfo {
    user: SafeUser;
    category: {
        label: string;
        icon: IconType;
        description: string;
    } | undefined;
    description: string;
    roomCount: number;
    guestCount: number;
    bathroomCount: number;
    locationValue: string;
}

export interface IListingCategory {
    label: string;
    icon: IconType;
    description: string;
}

export interface IListingReservation {
    price: number;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    dateRange: Range;
    onSubmit: () => void;
    disabled: boolean;
    disabledDates: Date[];
}