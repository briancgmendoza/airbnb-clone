import { SafeListing, SafeUser } from "../types/Types";

export interface IPropertiesClient {
    properties: SafeListing[];
    currentUser?: SafeUser | null;
}