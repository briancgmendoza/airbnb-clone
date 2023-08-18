import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { IconType } from "react-icons";

export interface IInput {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    formatPrice?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
}

export interface ICategoryInput {
    onClick: (value: string) => void;
    selected?: boolean;
    label: string;
    icon: IconType
}

export type CountrySelectValue = {
    flag: string;
    label: string;
    latlng: number[];
    region: string;
    value: string;
}

export interface ICountrySelect {
    value?: CountrySelectValue;
    onChange: (value: CountrySelectValue) => void;
}

export interface ICounter {
    title: string;
    subtitle: string;
    value: number;
    onChange: (value: number) => void;
}

export interface IImageUpload {
    onChange: (value: string) => void;
    value: string;
}