import * as F from './style'

export const Form = () => {
    return (
        <F.Container>

            <div className="infos-container">
                <input type="text" placeholder="Nome" />
                <input type="text" placeholder='CPF' />
            </div>
            
            <div className="buttons-container">
                <button>Adicionar</button>
                <button>Alterar</button>
                <button>Deletar</button>
                {/* <button>Cancelar</button> */}
            </div>

        </F.Container>
    )
}