import { useState } from 'react'
import * as T from './style'

export const Table = () => {

    const [users, setUsers] = useState<any[]>([])

    
    const fetchingUsers = () => {
        const url = `https://jsonplaceholder.typicode.com/users`

        fetch(url)
        .then(response => response.json())
        .then(data => setUsers(data))
        .catch(error => console.error(error))
    }

    /* const fazerCadastro = () => {
        const obj = {
            id: Math.random(),
            'name': nome,
            'username': nomeUsuario,

        }
    } */

    return (
        <T.Container>
            <button onClick={() => fetchingUsers()}>Requisição</button>
            <table>
                    <caption>Usuários</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Nome de usuário</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>)}
                </tbody>
            </table>
        </T.Container>
    )
}