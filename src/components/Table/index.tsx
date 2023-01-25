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

    fetchingUsers()


    return (
        <T.Container>
            <table>
                    <caption>Usuários</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                    </tr>)}
                </tbody>
            </table>
        </T.Container>
    )
}