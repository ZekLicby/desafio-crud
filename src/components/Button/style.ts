import styled from "styled-components";

export const Button = styled.button`
    width: 100px;
    height: 25px;
    border: none;
    margin-right: 1%;
    cursor: pointer;
    color: ${(props) => props.theme.colors.white};
`;

export const RegisterButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.blue};
`;
export const UpdateButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.yellow};
`;

export const DeleteButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.red};
`;

export const CancelAction = styled(Button)`
    background-color: ${(props) => props.theme.colors.gray};
`;

export const SelectButton = styled(Button)`
    background-color: ${(props) => props.theme.colors.green};
`;
