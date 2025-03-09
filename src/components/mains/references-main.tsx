import {styled} from "styled-components";
import * as All from "../reuse.tsx";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

const StyledH3References = styled.div`
    font-size: calc(2px + 2vw);
    border-bottom: solid 3px deeppink;
    width: 90%;
    padding: 0.5vh 0.5vw;
    margin: 2.5vh 1vw;
`;

const StyledPReferences = styled.p`
    font-size: calc(1px + 1.5vw);
    border-left: solid 10px deeppink;
    margin: 2vh 2vw;
    padding: 1vh 1vw;
`;

export default function ReferencesMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>References</All.StyledH2>
                    <StyledH3References>Professional</StyledH3References>
                    <StyledPReferences><strong>Joshua Caban</strong>, <em>U-Design Director</em><br/>&ensp;email:
                        jcaban@gmail.com</StyledPReferences>
                    <StyledPReferences><strong>Alexa Mavromatis</strong>, <em>BPT Director</em><br/>&ensp;email:
                        amavromatis@gmail.com</StyledPReferences>
                    <StyledH3References>Personal</StyledH3References>
                    <StyledPReferences><strong>Fatima Reyes</strong>, <em>UMASS Boston Student</em><br/>&ensp;email:
                        freyes@gmail.com</StyledPReferences>
                    <StyledPReferences><strong>Jacqueline Wu</strong>, <em>BU student</em><br/>&ensp;email:
                        jwu@gmail.com</StyledPReferences>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
};