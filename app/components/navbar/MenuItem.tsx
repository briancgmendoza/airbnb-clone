"use client";

import { IMenuItem } from "./Interface";

const MenuItem: React.FC<IMenuItem> = ({ onClick, label }: IMenuItem) => (
    <div
        className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
        "
        onClick={onClick}
    >
        {label}
    </div>
)

export default MenuItem