import {styled} from "styled-components";
import * as All from "../reuse";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";
import Projects from "../projects";

const StyledProjectsMainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: pink;
    
    & img {
        max-width: 100%;
    }
    
    & p {
        margin: 0 1vw;
        font-size: calc(2px + 2vw);
        font-family: Helvetica, "Roboto Thin", "Arial Black", sans-serif;
    }
    
    background-image: linear-gradient(to right, lightseagreen, dodgerblue);
    border-bottom: none;

    & h2 {
        color: midnightblue;
    }
    & img {
        border: none;
    }

    @media screen and (max-width: 750px) {
        width: 100%;
        height: 100vh;

        & p {
            margin: 2% 2%;
            font-size: calc(2px + 3vw);
        }
    }
`;

export default function ProjectsMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <StyledProjectsMainDiv>
                    <All.StyledH2>Projects</All.StyledH2>
                    <Projects/>
                </StyledProjectsMainDiv>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
};