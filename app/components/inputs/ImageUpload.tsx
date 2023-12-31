"use client";

import { useCallback } from "react";
import Image from "next/image";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";

import { IImageUpload } from "./Interface";

declare global {
    var cloudinary: any;
}

const ImageUpload: React.FC<IImageUpload> = ({
    value,
    onChange
}: IImageUpload) => {

    const handleUpload = useCallback((result: any) => {
        onChange(result.info.secure_url)
    }, [onChange]);

    return (
        <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="migegkrv"
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => {
                return(
                    <div
                        className="
                            relative
                            cursor-pointer
                            hover:opacity-70
                            transition
                            border-dashed
                            border-2
                            p-20
                            border-neutral-300
                            flex
                            flex-col
                            jusity-center
                            items-center
                            gap-4
                            text-neutral-600
                        "
                        onClick={() => open?.()}
                        >
                            <TbPhotoPlus size={50}/>
                            <div className="font-semibold text-lg">Click to upload</div>
                            {value && (
                                <div className="absolute inset-0 w-full h-full">
                                    <Image
                                        alt="upload"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        src={value}
                                    />
                                </div>
                            )}
                    </div>
                )
            }}
        </CldUploadWidget>
    )
}

export default ImageUpload