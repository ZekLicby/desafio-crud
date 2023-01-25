import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 40vh;

table{
    width: 100%;
    border: 1px black solid;

    thead{
        caption{
            
        }
    }

    tbody{
        tr{
            border: 1px black solid;
            td, th{
                border: 1px black solid;
            }
        }
    }
}
`