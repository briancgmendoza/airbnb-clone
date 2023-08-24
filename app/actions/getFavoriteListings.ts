import prisma from "@/app/libs/prismadb";

import getCurrentUser from "./getCurrentUser";

export const getFavoriteListings = async () => {
    try {
        const currentUser = await getCurrentUser();

        if(!currentUser) return [];

        const favorites = await prisma.listing.findMany({
            where: {
                id: {
                    in: [...(currentUser.favoriteIds || [])]
                }
            }
        });

        const safeFavorite = favorites.map((favorite) => ({
            ...favorite,
            createdAt: favorite.createdAt.toISOString()
        }));

        return safeFavorite;

    } catch(error: any) {
        throw new Error(error);
    }
}

export default getFavoriteListings