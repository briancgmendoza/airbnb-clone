"use client";

import { IHeading } from "./Interface";

const Heading: React.FC<IHeading> = ({
    title,
    subtitle,
    center
}: IHeading) => (
    <div className={center ? "text-center" : "text-start"}>
        <div className="text-2xl font-bold">
            {title}
        </div>
        <div className="font-light text-neutral-500 mt-2">
            {subtitle}
        </div>
    </div>
)

export default Heading;