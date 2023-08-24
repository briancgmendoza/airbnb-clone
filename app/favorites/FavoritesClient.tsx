import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import { IFavoritesClient } from "./Interface";

const FavoritesClient: React.FC<IFavoritesClient> = ({
    favoriteListings,
    currentUser
}: IFavoritesClient) => {
    return (
        <Container>
            <Heading
                title="Favorites"
                subtitle="List of places you have favorited!"
            />
            <div
                className="
                    mt-10
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5
                    2xl:grid-cols-6
                    gap-8
                "
            >
                {favoriteListings.map((favoriteListing) => (
                    <ListingCard
                        key={favoriteListing.id}
                        data={favoriteListing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoritesClient