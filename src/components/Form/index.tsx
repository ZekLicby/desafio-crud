import React from 'react'
import { FormProps } from '../../types'
import { Input } from '../Input'
import * as F from './style'

export const Form = ({btnCadastrar, setBtnCadastrar, setNome, setNomeUsuario, setEmail, cadastrarUsuario, nome, nomeUsuario, email}:FormProps) => {

    return (
        <F.Container>
            <div className="infos-container">
                <Input type='text' value={nome} placeholder="Nome" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
                <Input type="text" value={nomeUsuario} placeholder='Nome de usuário' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setNomeUsuario(e.target.value)}  />
                <Input type="email" value={email} placeholder='E-mail' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </div>
            
            <div className="buttons-container">
                {
                    btnCadastrar
                    ?
                    <Input type="button" value="Cadastrar" onClick={cadastrarUsuario} />
                    :
                    <div>
                        <Input type="button" value="Alterar" />
                        <Input type="button" value="Deletar" />
                        <Input type="button" value="Cancelar" /> 
                    </div>
                }
            </div>

        </F.Container>
    )
}