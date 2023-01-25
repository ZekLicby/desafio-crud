import * as F from './style'

/* type Props = {
    
} */

export const Form = ({btnCadastrar, setBtnCadastrar, setNome, setNomeUsuario, setEmail}:any) => {

    return (
        <F.Container>
            <div className="infos-container">
                <input type="text" placeholder="Nome" onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder='Nome de usuário' onChange={e => setNomeUsuario(e.target.value)}/>
                <input type="email" placeholder='email' onChange={e => setEmail(e.target.value)}/>
            </div>
            
            <div className="buttons-container">
                {
                    btnCadastrar
                    ?
                    <input type="button" value="Cadastrar" onClick={() => setBtnCadastrar(!btnCadastrar)} />
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