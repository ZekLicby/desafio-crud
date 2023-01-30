import React from 'react'
import { InputProps } from '../../types'
import * as I from './style'

export const Input:Function = ({type, value, placeholder, onChange, onClick}:InputProps) => {

    return (
        <>
            <I.Container type={type} value={value} placeholder={placeholder} onChange={onChange} onClick={onClick}/>
        </>
    )
}