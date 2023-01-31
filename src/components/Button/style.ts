import styled from "styled-components";

export const Button = styled.button`
    width: 120px;
    height: 30px;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    margin-right: 1%;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
    &:active{
        background-color: ${(props) => props.theme.colors.blue[1]};
        font-size: 16px;
    }
`;

export const RegisterButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.blue[0]};
    &:active{
        background-color: ${(props) => props.theme.colors.blue[1]};
    }
`;
export const UpdateButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.yellow[0]};
    &:active{
        background-color: ${(props) => props.theme.colors.yellow[1]};
    }
`;

export const DeleteButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.red[0]};
    &:active{
        background-color: ${(props) => props.theme.colors.red[1]};
    }
`;

export const CancelAction = styled(Button)`
    background-color: ${(props) => props.theme.colors.gray[0]};
    &:active{
        background-color: ${(props) => props.theme.colors.gray[1]};
    }
`;

export const SelectButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.green[0]};
    &:active{
        background-color: ${(props) => props.theme.colors.green[1]};
    }
    margin:0;
    width: 100%;
`;
