import {Dispatch, SetStateAction} from 'react'

export interface FormProps {
    registerBtn: boolean;
    setRegisterBtn: Dispatch<SetStateAction<boolean>>;
    setName: Dispatch<SetStateAction<string>>;
    setUsername: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    registerUser: Function;
    name: string;
    username: string;
    email: string;
    updateUser: Function;
    deleteUser: Function
    cancelAction: Function
}

export interface UsersTypes {
    name: string;
    username: string;
    email: string;
}

export interface TableProps {
    users: UsersTypes[];
    setUsers: Dispatch<SetStateAction<{
        name: string;
        username: string;
        email: string;
    }[]>>;
    selectUser: Function;
    term: string
    setTerm: Dispatch<SetStateAction<string>>
}