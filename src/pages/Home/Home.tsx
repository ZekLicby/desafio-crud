import React, {useState} from 'react';
import { FormComponent } from '../../components/Form';
import { TableComponent } from '../../components/Table';



const Home:React.FC = () => {

    const [indiceVetor, setIndiceVetor] = useState<string>('')
    const [btnCadastrar, setBtnCadastrar] = useState<boolean>(true)
    const [nome, setNome] = useState<string>('')
    const [nomeUsuario, setNomeUsuario] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [users, setUsers] = useState<{}[]>([])

    const cadastrarUsuario:Function = () => {

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

    const selecionar:Function = (indice:string) => {
      alert(indice)
    }

  return (
    <>
    {/*<h1>{JSON.stringify(users)}</h1>*/}

      <FormComponent btnCadastrar={btnCadastrar} setBtnCadastrar={setBtnCadastrar} setNome={setNome} setNomeUsuario={setNomeUsuario} setEmail={setEmail} cadastrarUsuario={cadastrarUsuario} nome={nome} nomeUsuario={nomeUsuario} email={email}/ >
      <TableComponent users={users} setUsers={setUsers} selecionar={selecionar} />
    </>
  );
}

export default Home;
