import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoritesClient from "./FavoritesClient";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";

const FavoritesPage = async () => {
    const favoriteListings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if(favoriteListings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title="No favorites found."
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <FavoritesClient
                favoriteListings={favoriteListings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default FavoritesPage