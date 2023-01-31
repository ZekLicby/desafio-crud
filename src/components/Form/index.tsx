import React from 'react'
import { FormProps } from '../../types'
import { InputComponent as Input } from '../Input'
import {Container} from './style'

export const FormComponent = ({registerBtn, setRegisterBtn, setName, setUsername, setEmail, registerUser, name, username, email}:FormProps) => {

    return (
        <Container>
            <div className="infos-container">
                
                <Input type='text' value={name} placeholder="Nome" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />

                <Input type="text" value={username} placeholder='Nome de usuário' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}  />

                <Input type="email" value={email} placeholder='E-mail' onChange={(e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />

            </div>
            
            <div className="buttons-container">
                {
                    registerBtn
                    ?
                    <Input type="button" value="Cadastrar" onClick={() => registerUser()} />
                    :
                    <div>
                        <Input type="button" value="Alterar" />
                        <Input type="button" value="Deletar" />
                        <Input type="button" value="Cancelar" /> 
                    </div>
                }
            </div>

        </Container>
    )
}