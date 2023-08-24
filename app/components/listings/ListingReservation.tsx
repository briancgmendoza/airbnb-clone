"use client";

import Button from "../Button";
import Calendar from "../inputs/Calendar";

import { IListingReservation } from "./Interface";

const ListingReservation: React.FC<IListingReservation> = ({
    price,
    totalPrice,
    onChangeDate,
    dateRange,
    onSubmit,
    disabled,
    disabledDates
}: IListingReservation) => (
    <div
        className="
                bg-white
                rounded-xl
                border-[1px]
                border-neutral-200
                overflow-hidden
            "
    >
        <div className="flex flex-row items-center gap-1 p-4">
            <div className="text-2xl font-semibold">
                ₱{price.toLocaleString()}
            </div>
            <div className="font-light text-neutral-600">night</div>
        </div>
        <hr />
        <Calendar
            value={dateRange}
            disabledDates={disabledDates}
            onChange={(value) => onChangeDate(value.selection)}
        />
        <hr />
        <div className="p-4">
            <Button
                disabled={disabled}
                label="Reserve"
                onClick={onSubmit}
            />
        </div>
        <div className="p-4 flex flex-row items-center justify-between font-semibold text-lg">
            <div>Total</div>
            <div>₱{totalPrice.toLocaleString()}</div>
        </div>
    </div>
)

export default ListingReservation