import * as T from './style'
import {useEffect} from 'react'

export const Table = ({users, setUsers}:any) => {

    
    const fetchingUsers = () => {
        const url = `https://jsonplaceholder.typicode.com/users`

        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(...users, data))
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchingUsers()
    }, [])

    return (
        <T.Container>
            {/* <button onClick={() => fetchingUsers()}>Requisição</button> */}
            <T.Table>
                    <T.Caption>Usuários</T.Caption>
                <T.Thead>
                    <T.Tr>
                        <T.Th>#</T.Th>
                        <T.Th>Nome</T.Th>
                        <T.Th>Nome de usuário</T.Th>
                        <T.Th>E-mail</T.Th>
                    </T.Tr>
                </T.Thead>
                <T.Tbody>
                    {users.map((user:any, index:any) => <T.Tr key={index}>
                        <T.Td>{index+1}</T.Td>
                        <T.Td>{user.name}</T.Td>
                        <T.Td>{user.username}</T.Td>
                        <T.Td>{user.email}</T.Td>
                        <T.Td><button>Selecionar</button></T.Td>
                    </T.Tr>)}
                </T.Tbody>
            </T.Table>
        </T.Container>
    )
}