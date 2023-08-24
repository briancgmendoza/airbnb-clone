"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import { IPropertiesClient } from "./Interface";

const PropertiesClient: React.FC<IPropertiesClient> = ({
    properties,
    currentUser
}: IPropertiesClient) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string>("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/listings/${id}`)
            .then(() => {
                toast.success("Property listing deleted.");
                router.refresh();
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error);
            })
            .finally(() => {
                setDeletingId("");
            })
    }, [router]);

    return (
        <Container>
            <Heading
                title="Properties"
                subtitle="List of your Airbnb properties"
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
                {properties.map((property) => (
                    <ListingCard
                        key={property.id}
                        data={property}
                        actionId={property.id}
                        onAction={onCancel}
                        disabled={deletingId === property.id}
                        actionLabel="Delete listed property"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}

export default PropertiesClient