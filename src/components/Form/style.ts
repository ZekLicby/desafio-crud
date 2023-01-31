import styled from "styled-components";

export const Container = styled.div`
    width: 60%;
    height: 20vh;
    margin: 5% auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const DivButtons = styled.div`
    width: 100%;
    display: flex;
`;

export const Div = styled.div`
width: 100%;
`

export const DivInfos = styled(DivButtons)`
    height: auto;
    flex-direction: column;
    margin-bottom: 2.5%;
`;
