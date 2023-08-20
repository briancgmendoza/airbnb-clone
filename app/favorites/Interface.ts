import { SafeListing, SafeUser } from "../types/Types";

export interface IFavoritesClient {
    favoriteListings: SafeListing[];
    currentUser?: SafeUser | null;
}