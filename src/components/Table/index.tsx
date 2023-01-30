import {Container, Table, Caption, Thead, Tr, Th, Tbody, Td} from './style'
import React, {useEffect} from 'react'
import { TableProps } from '../../types'
import { InputComponent as Input } from '../Input'


export const TableComponent = ({users, setUsers, selecionar}:TableProps) => {

    
    const fetchingUsers:Function = () => {
        const url = `https://jsonplaceholder.typicode.com/users`

        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchingUsers()
    }, [])

    return (
        <Container>
            <Table>
                    <Caption>Usuários</Caption>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Nome</Th>
                        <Th>Nome de usuário</Th>
                        <Th>E-mail</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((user:any, index:number) => <Tr key={index}>
                        <Td>{index+1}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.username}</Td>
                        <Td>{user.email}</Td>
                        <Td><Input type="button" value="Selecionar" onClick={() => selecionar()}/></Td>
                    </Tr>)}
                </Tbody>
            </Table>
        </Container>
    )
}