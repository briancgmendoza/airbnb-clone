import { SafeUser } from "../types/Types";

export interface IModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export interface IUseFavorite {
    listingId: string;
    currentUser?: SafeUser | null;
}