import { SafeReservation, SafeUser } from "../types/Types";

export interface IReservationsClient {
    reservations:  SafeReservation[];
    currentUser?: SafeUser | null;
}