'use client';

import { useEffect, useState } from "react";
import { IClientOnly } from "./Interface";

const ClientOnly: React.FC<IClientOnly> = ({ children }: IClientOnly) => {
    const [hasMounted, setHasMounted] = useState<boolean>(false)

    useEffect(() => {
        setHasMounted(true)
    },[])

    if(!hasMounted) return null

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly;