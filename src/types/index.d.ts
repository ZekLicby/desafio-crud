import React from "react"

export interface FormProps {
    btnCadastrar: boolean
    setBtnCadastrar: React.Dispatch<React.SetStateAction<boolean>>
    setNome: React.Dispatch<React.SetStateAction<string>>
    setNomeUsuario: React.Dispatch<React.SetStateAction<string>>
    setEmail: React.Dispatch<React.SetStateAction<string>>
    cadastrarUsuario: Function
    nome: string
    nomeUsuario: string
    email: string
}

export interface TableProps {
    users: any[]
    setUsers: React.Dispatch<React.SetStateAction<any[]>>
}

export interface InputProps {
    type: string
    value: string
    placeholder?: string
    onChange?: React.ChangeEventHandle
    onClick?: React.MouseEventHandler
}