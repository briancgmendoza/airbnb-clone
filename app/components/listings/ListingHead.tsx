"use client";

import Image from "next/image";

import Heading from "../Heading";
import HeartButton from "../HeartButton";
import useCountries from "@/app/hooks/useCountries";

import { IListingHead } from "./Interface";

const ListingHead: React.FC<IListingHead> = ({
    title,
    imageSrc,
    locationValue,
    id,
    currentUser
}: IListingHead) => {
    const { getByValue } = useCountries();
    const location = getByValue(locationValue);
    
    return (
        <>
            <Heading
                title={title}
                subtitle={`${location?.region}, ${location?.label}`}
            />
            <div
                className="
                    w-full
                    h-[60vh]
                    overflow-hidden
                    rounded-xl
                    relative
                "
            >
                <Image
                    alt="Image"
                    src={imageSrc}
                    fill
                    className="object-cover w-full"
                />
                <div className="absolute top-5 right-5">
                    <HeartButton
                        listingId={id}
                        currentUser={currentUser}
                    />
                </div>
            </div>
        </>
    )
}

export default ListingHead