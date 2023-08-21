import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

import getCurrentUser from "../actions/getCurrentUser";
import { getListings } from "../actions/getListings";

const PropertiesPage = async () => {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return(
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please login"
                />
            </ClientOnly>
        )
    }

    const properties = await getListings({ userId: currentUser.id });

    if (properties.length === 0) {
        return(
            <ClientOnly>
                <EmptyState
                    title="No properties found"
                    subtitle="Looks like you haven't airbnb any of your properties."
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <PropertiesClient
                properties={properties}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}

export default PropertiesPage