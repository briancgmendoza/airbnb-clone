"use client";

import { IContainer } from "./Interface";

const Container: React.FC<IContainer> = ({ children }: IContainer) => (
    <div
        className="
                max-w-[2520px]
                mx-auto
                xl:px-20
                md:px-10
                sm:px-2
                px-4
            "
    >
        {children}
    </div>
)

export default Container;