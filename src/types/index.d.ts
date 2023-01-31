import React from "react";

export interface FormProps {
    registerBtn: boolean;
    setRegisterBtn: React.Dispatch<React.SetStateAction<boolean>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    registerUser: Function;
    name: string;
    username: string;
    email: string;
    updateUser: Function;
    deleteUser: Function
    cancelAction: Function
}

export interface TableProps {
    users: {
        name: string;
        username: string;
        email: string;
    }[];
    setUsers: React.Dispatch<React.SetStateAction<{
        name: string;
        username: string;
        email: string;
    }[]>>;
    selectUser: Function;
    term: string
    setTerm: React.Dispatch<React.SetStateAction<string>>
}

export interface UsersTypes {
    name: string;
    username: string;
    email: string;
}

export interface UserTypes extends UsersTypes {
}