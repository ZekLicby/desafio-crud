import * as F from './style'

/* type Props = {
    
} */

export const Form = ({btnCadastrar, setBtnCadastrar, setNome, setNomeUsuario, setEmail, cadastrarUsuario, nome, nomeUsuario, email}:any) => {

    return (
        <F.Container>
            <div className="infos-container">
                <input type="text" value={nome} placeholder="Nome" onChange={e => setNome(e.target.value)} />
                <input type="text" value={nomeUsuario} placeholder='Nome de usuário' onChange={e => setNomeUsuario(e.target.value)}  />
                <input type="email" value={email} placeholder='E-mail' onChange={e => setEmail(e.target.value)} />
            </div>
            
            <div className="buttons-container">
                {
                    btnCadastrar
                    ?
                    <input type="button" value="Cadastrar" onClick={cadastrarUsuario} />
                    :
                    <div>
                        <input type="button" value="Alterar" onClick={() => setBtnCadastrar(!btnCadastrar)} />
                        <input type="button" value="Deletar" />
                        <input type="button" value="Cancelar" /> 
                    </div>
                }
            </div>

        </F.Container>
    )
}