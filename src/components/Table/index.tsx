import { Container, Table, Caption, Thead, Tr, Th, Tbody, Td } from "./style";
import React, { useEffect } from "react";
import { TableProps, UsersTypes} from "../../types";
import { InputFilter } from "../Input/style";
import { SelectButton } from "../Button/style";

export const TableComponent = ({
    users,
    setUsers,
    selectUser,
    term,
    setTerm,
}: TableProps) => {
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
            <InputFilter
                type="search"
                placeholder="Search for the name"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTerm(e.target.value)
                }
            />
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
                    {users
                        .filter((obj) => obj.name.includes(term))
                        .map((user: UsersTypes, index: number) => (
                            <Tr key={index}>
                                <Td>{index + 1}</Td>
                                <Td>{user.name}</Td>
                                <Td>{user.username}</Td>
                                <Td>{user.email}</Td>
                                <Td>
                                    <SelectButton
                                        onClick={() => selectUser(index)}
                                    >
                                        Select
                                    </SelectButton>
                                </Td>
                            </Tr>
                        ))}
                </Tbody>
            </Table>
        </Container>
    );
};
