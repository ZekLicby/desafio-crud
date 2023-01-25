import styled from "styled-components";

export const Container = styled.div`
width: 60%;
height: 20vh;
margin: 5% auto;
display: flex;
flex-direction: column;
align-items: center;

.infos-container{
width: 100%;
height: auto;
display: flex;
flex-direction: column;
margin-bottom: 2.5%;

    input{
        height: 30px;
        background-color: #EEE;
        outline: none;
        padding: 1%;
        color: black;
        margin-bottom: 1%;
        border: none;
    }
}

.buttons-container{
    width: 100%;
    display: flex;
    
    input[type=button]{
        width: 100px;
        height: 25px;
        border: none;
        margin-right: 1%;
        color: var(--white);
    }

    input[type=button]:nth-child(1){
        background-color: var(--blue);
    }
    div{
        width: 100%;

        input[type=button]:nth-child(1){
            background-color: var(--yellow);
        }

        input[type=button]:nth-child(2){
            background-color: var(--red);
        }

        input[type=button]:nth-child(3){
            background-color: var(--green);
        }
    }
}
`
