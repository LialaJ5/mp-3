import {styled} from "styled-components";
import * as All from "../reuse";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

const StyledDivAccolades = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5vh auto;
    justify-content: left;

    & p {
        font-size: calc(2px + 2vw);
        border-left: solid 2px deeppink;
        padding: 1vh 1vw;
        width: 70%;
    }
`;

const StyledImgAccolades = styled.div`
    margin: 1vh 1vw;
    width: 30%;
`;

export default function AccoladesMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>Accolades</All.StyledH2>
                    <StyledDivAccolades>
                        <StyledImgAccolades>
                            <img src="/nati.jpeg" alt="The National Exam logo" id="accolades-img-one"/>
                        </StyledImgAccolades>
                        <p>I won the National Latin Exam Summa Cum Laude Award from 2017-2022. I really liked learning Latin
                            because it is a part of so many languages. Salve!</p>
                    </StyledDivAccolades>
                    <StyledDivAccolades>
                        <StyledImgAccolades>
                            <img src="/bost.png" alt="The Boston University logo" id="accolades-img-two"/>
                        </StyledImgAccolades>
                        <p>I was on the Dean's List my first semester at BU. I'm still proud of this moment because I was
                            recognized for my grades even though I was so scared to start college!</p>
                    </StyledDivAccolades>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
};