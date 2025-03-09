import {styled} from "styled-components";

export const StyledH2 = styled.h2`
    text-align: center;
    font-family: Helvetica, "Roboto Thin", "Arial Black", sans-serif;
    font-size: calc(10px + 2vw);
    font-weight: bold;
    margin: 1vh 1vw;
    border-top: solid 2px hotpink;
    border-bottom: solid 2px hotpink;
    color: deeppink;
`;

export const StyledP = styled.p`
    margin: 0 1vw;
    font-size: calc(2px + 2vw);
    font-family: Helvetica, "Roboto Thin", "Arial Black", sans-serif;
    padding: 1vw;
`;

export const StyledBodyContent = styled.body`
    max-width: 80vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const StyledNavMain = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
    width: 100%;
    background-color: powderblue;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100vh;
        flex-direction: column;
    }
`;

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: pink;
    border-bottom: 2px solid hotpink;
    
    & img {
        max-width: 100%;
        border: solid 3px deeppink;
    }
    
    & p {
        margin: 0 1vw;
        font-size: calc(2px + 2vw);
        font-family: Helvetica, "Roboto Thin", "Arial Black", sans-serif;
    }
    
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh;
        
        & p {
            margin: 2% 2%;
            font-size: calc(2px + 3vw);
        }
    }
`;

export const StyledImageContain = styled.div`
    width: 30%;
    margin: auto 1vw;
`;

export const StyledContain = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    margin-bottom: 2vh;

    & p {
        margin: auto 1vw;
        text-wrap: nowrap;
        font-size: calc(2px + 2vw);
        border-left: solid 2px deeppink;
        padding-top: 1vh;
        padding-bottom: 1vh;
    }
`;

export const StyledList = styled.div`
    padding-bottom: 5vh;
    font-size: calc(2px + 2vw);
    margin: 1vh 1vw;
`;
