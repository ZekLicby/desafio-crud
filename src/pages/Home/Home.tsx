import React, {useState} from 'react';
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';



const Home:React.FC = () => {

    const [btnCadastrar, setBtnCadastrar] = useState<boolean>(true)
    const [nome, setNome] = useState<string>('')
    const [nomeUsuario, setNomeUsuario] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [users, setUsers] = useState<{}[]>([])

    const cadastrarUsuario = () => {
      let obj = {
        'name': nome,
        'username': nomeUsuario,
        'email': email
      }

      setUsers([...users, obj])

      setNome('')
      setNomeUsuario('')
      setEmail('')
    }

  return (
    <>
    {/*<h1>{JSON.stringify(users)}</h1>*/}

      <Form btnCadastrar={btnCadastrar} setBtnCadastrar={setBtnCadastrar} setNome={setNome} setNomeUsuario={setNomeUsuario} setEmail={setEmail} cadastrarUsuario={cadastrarUsuario} nome={nome} nomeUsuario={nomeUsuario} email={email}/ >
      <Table users={users} setUsers={setUsers} />
    </>
  );
}

export default Home;
