import { SafeUser } from "@/app/types/Types";

export interface IUser {
    currentUser?: SafeUser | null;
}

export interface IMenuItem {
    onClick: () => void;
    label: string;
}