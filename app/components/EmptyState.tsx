'use client';

import { useRouter } from "next/navigation"
import { IEmptyState } from "./Interface"
import Heading from "./Heading";
import Button from "./Button";

const EmptyState: React.FC<IEmptyState> = ({
    title = 'No exact matches',
    subtitle = 'Try changing or removing some of your filters',
    showReset }: IEmptyState) => {
        const router = useRouter();

    return (
        <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
    )
}

export default EmptyState