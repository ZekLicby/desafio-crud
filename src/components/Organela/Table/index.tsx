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
                    {users.map((user:any, index:any) => <tr key={index}>
                        <td>{index+1}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td><button>Selecionar</button></td>
                    </tr>)}
                </tbody>
            </table>
        </T.Container>
    )
}