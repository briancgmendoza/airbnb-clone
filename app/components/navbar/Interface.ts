import { User } from "@prisma/client";

export type SafeUser = Omit<
    User,
    'createdAt' | 'updatedAt' | 'emailVerified'> & {
        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;
    }

export interface IUser {
    currentUser?: SafeUser | null;
}

export interface IMenuItem {
    onClick: () => void;
    label: string;
}