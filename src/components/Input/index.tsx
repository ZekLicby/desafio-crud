import React from 'react'
import { InputProps } from '../../types'
import * as I from './style'

export const Input:Function = ({type, value, placeholder, onChange}:InputProps) => {

    return (
        <>
            <I.Container type={type} value={value} placeholder={placeholder} onChange={onChange}/>
        </>
    )
}