import React, {useState} from 'react';
import { Input } from '../../components/Atomo/Input';
import { Form } from '../../components/Organela/Form';
import { Table } from '../../components/Organela/Table';

function Home() {

    const [btnCadastrar, setBtnCadastrar] = useState<boolean>(true)
    const [nome, setNome] = useState<string>('')
    const [nomeUsuario, setNomeUsuario] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [users, setUsers] = useState<any[]>([])

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
      <Input/>
    </>
  );
}

export default Home;
