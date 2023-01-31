import React from "react";
import { InputProps } from "../../types";
import { Input } from "./style";

export const InputComponent: Function = ({
    type,
    value,
    placeholder,
    onChange,
    onClick,
}: InputProps) => {
    return (
        <>
            <Input
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onClick={onClick}
            />
        </>
    );
};
