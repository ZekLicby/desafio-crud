import React from "react"

export interface FormProps {
    registerBtn: boolean
    setRegisterBtn: React.Dispatch<React.SetStateAction<boolean>>
    setName: React.Dispatch<React.SetStateAction<string>>
    setUsername: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    registerUser: Function
    name: string
    username: string
    email: string
}

export interface TableProps {
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
    selectUser: Function
}

export interface InputProps {
    type: string
    value: string
    placeholder?: string
    onChange?: React.ChangeEventHandle
    onClick?: React.MouseEventHandler
}

export interface ButtonProps {
    onClick?: React.MouseEventHandler
}