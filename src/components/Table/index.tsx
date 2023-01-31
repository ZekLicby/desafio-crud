import { Container, Table, Caption, Thead, Tr, Th, Tbody, Td } from "./style";
import React, { useEffect } from "react";
import { TableProps, UserTypes } from "../../types";
import { InputComponent as Input } from "../Input";

export const TableComponent = ({ users, setUsers, selectUser }: TableProps) => {
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
                    {users.map((user: UserTypes , index: number) => (
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
