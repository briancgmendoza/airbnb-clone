import prisma from '@/app/libs/prismadb'

import { IGetListings } from './Interface'

export const getListings = async (params: IGetListings) => {
    try {
        const { userId } = params;
        
        let query: any = {};

        if(userId) {
            query.userId = userId
        }

        const listings = await prisma.listing.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc'
            }
        })

        const safeListings = listings.map((listing) => ({
            ...listing,
            createdAt: listing.createdAt.toISOString(),
        }))

        return safeListings
    } catch(error: any) {
        throw new Error(error)
    }
}