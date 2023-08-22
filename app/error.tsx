'use client';

import { useEffect } from "react";

import EmptyState from "./components/EmptyState";

import { IErrorState } from "./Interface";

const ErrorState: React.FC<IErrorState> = ({ error }: IErrorState) => {

    useEffect(() => {
        console.error(error)
    }, [error]);

    return (
        <EmptyState title="Uh Oh..." subtitle="Something went wrong!"/>
    )
}

export default ErrorState