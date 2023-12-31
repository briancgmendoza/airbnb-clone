import { IconType } from "react-icons";
import { SafeUser } from "../types/Types";

export interface IContainer {
    children: React.ReactNode;
}

export interface IClientOnly {
    children: React.ReactNode;
}

export interface IButton {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType;
}

export interface IHeading {
    title: string;
    subtitle?: string;
    center?: boolean;
}

export interface IAvatar {
    src: string | null | undefined;
}

export interface ICategoryBox {
    label: string;
    icon: IconType;
    selected?: boolean;
}

export interface IMap {
    center?: number[];
}

export interface IEmptyState {
    title?: string;
    subtitle?: string;
    showReset?: boolean;
}

export interface IHeartButton {
    listingId: string;
    currentUser?: SafeUser | null;
}