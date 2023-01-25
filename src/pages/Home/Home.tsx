import React, {useState} from 'react';
import { Form } from '../../components/Form';
import { Table } from '../../components/Table';

function Home() {

    const [btnCadastrar, setBtnCadastrar] = useState<boolean>(true)
    const [nome, setNome] = useState<string>('')
    const [nomeUsuario, setNomeUsuario] = useState<string>('')
    const [email, setEmail] = useState<string>('')

  return (
    <>
    <h1>{nome}</h1>
    <h1>{nomeUsuario}</h1>
    <h1>{email}</h1>
      <Form btnCadastrar={btnCadastrar} setBtnCadastrar={setBtnCadastrar} setNome={setNome} setNomeUsuario={setNomeUsuario} setEmail={setEmail} />
      <Table/>
    </>
  );
}

export default Home;
