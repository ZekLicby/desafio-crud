import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 40vh;
`;

export const Table = styled.table`
    width: 100%;
    overflow-x: hidden;
    border-top: 1px black solid;
    border-spacing: 0px;
`;

export const Thead = styled.thead`
    border-bottom: 2px black solid;
`;

export const Tbody = styled.tbody``;

export const Caption = styled.caption``;

export const Th = styled.th`
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const Tr = styled.tr`
    &:nth-child(2n+2) {
        background-color: aliceblue;
    }
`;

export const Td = styled.td`
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
