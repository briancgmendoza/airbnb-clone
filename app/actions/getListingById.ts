import prisma from "@/app/libs/prismadb";

import { IGetListingById } from "./Interface";

export const getListingById = async (params: IGetListingById) => {
    try {
        const { listingId } = params;

        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },
            include: {
                user: true
            }
        });

        if (!listing) return null;

        return {
            ...listing,
            createdAt: listing.createdAt.toISOString(),
            user: {
                ...listing.user,
                createdAt: listing.user.createdAt.toISOString(),
                updatedAt: listing.user.updatedAt.toISOString(),
                emailVerified: listing.user.emailVerified?.toISOString() || null
            }
        }
        
    } catch(error: any) {
        throw new Error(error);
    }
}

export default getListingById