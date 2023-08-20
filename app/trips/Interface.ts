import { SafeReservation, SafeUser } from "../types/Types";

export interface ITripsClient {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}