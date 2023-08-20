'use client';

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";

import { IReservationsClient } from "./Interface";

const ReservationsClient: React.FC<IReservationsClient> = ({
    reservations,
    currentUser
}: IReservationsClient) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState<string>("");

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success("Reservation cancelled.")
            router.refresh()
        })
        .catch(() => toast.error("Cancelling reservation failed."))
        .finally(() => setDeletingId(""));

    },[router])

    return (
        <Container>
            <Heading
                title="Reservations"
                subtitle="Bookings on your properties"
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
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        reservation={reservation}
                        currentUser={currentUser}
                        data={reservation.listing}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Cancel guest reservation"
                    />
                ))}
            </div>
        </Container>
    )
}

export default ReservationsClient