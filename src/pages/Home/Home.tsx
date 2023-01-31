import React, {useState} from 'react';
import { FormComponent } from '../../components/Form';
import { TableComponent } from '../../components/Table';



const Home:React.FC = () => {

    const [indexVetor, setIndexVetor] = useState<number>(-1)
    const [registerBtn, setRegisterBtn] = useState<boolean>(true)
    const [name, setName] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [users, setUsers] = useState<any[]>([])

    const registerUser:Function = () => {

      let obj = {
        'name': name,
        'username': username,
        'email': email
      }

      setUsers([...users, obj])

      setName('')
      setUsername('')
      setEmail('')
      
    }

    const selectUser:Function = (indice:number) => {
      setIndexVetor(indice)
      setName(users[indice].name)
      setUsername(users[indice].username)
      setEmail(users[indice].email)

      setRegisterBtn(false)
    }

  return (
    <>
      <FormComponent registerBtn={registerBtn} setRegisterBtn={setRegisterBtn} setName={setName} setUsername={setUsername} setEmail={setEmail} registerUser={registerUser} name={name} username={username} email={email}/ >

      <TableComponent users={users} setUsers={setUsers} selectUser={selectUser} />
    </>
  );
}

export default Home;
