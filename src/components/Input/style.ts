import styled from "styled-components";

export const Input = styled.input`
            height: 30px;
            background-color: #eee;
            outline: none;
            padding: 1%;
            color: black;
            margin-bottom: 1%;
            border: none;
`;

export const InputButton = styled.input`
    width: 100px;
    height: 25px;
    border: none;
    margin-right: 1%;
    color: ${props => props.theme.colors.white};
`

export const InputRegisterButton = styled(InputButton)`
    background-color: ${props => props.theme.colors.blue};
`
export const InputUpdateButton = styled(InputButton)`
    background-color: ${props => props.theme.colors.yellow};
`

export const InputDeleteButton = styled(InputButton)`
    background-color: ${props => props.theme.colors.red};
`

export const InputCancelAction = styled(InputButton)`
    background-color: ${props => props.theme.colors.gray};
`

export const InputSelectButton = styled(InputButton)`
    background-color: ${props => props.theme.colors.green};
`

export const InputFilter = styled(Input)`

`