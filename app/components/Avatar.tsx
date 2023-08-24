"use client";

import Image from "next/image";

import { IAvatar } from "./Interface";

const Avatar: React.FC<IAvatar> = ({ src }: IAvatar) => (
    <Image
        className="rounded-full"
        height="30"
        width="30"
        alt="Avatar"
        src={src || "/images/placeholder.jpg"}
    />
)

export default Avatar;