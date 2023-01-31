import { Container, Table, Caption, Thead, Tr, Th, Tbody, Td } from "./style";
import React, { useEffect } from "react";
import { TableProps, UserTypes } from "../../types";
import { InputComponent as Input } from "../Input";

export const TableComponent = ({ users, setUsers, selectUser, term, setTerm }: TableProps) => {
    const fetchingUsers: Function = () => {
        const url = `https://jsonplaceholder.typicode.com/users`;

        fetch(url)
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error(error));
    };

    useEffect(() => {
        fetchingUsers();
    }, []);

    return (
        <Container>
            <Input type="text" placeholder="Search for the name" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTerm(e.target.value)} />
            <h1>{term}</h1>
            <Table>
                <Caption>Users</Caption>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Name</Th>
                        <Th>Username</Th>
                        <Th>E-mail</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.filter(obj => obj.name.includes(term)).map((user: UserTypes , index: number) => (
                        <Tr key={index}>
                            <Td>{index + 1}</Td>
                            <Td>{user.name}</Td>
                            <Td>{user.username}</Td>
                            <Td>{user.email}</Td>
                            <Td>
                                <Input
                                    type="button"
                                    value="Select"
                                    onClick={() => selectUser(index)}
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Container>
    );
};
