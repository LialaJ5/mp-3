import {styled} from "styled-components";
import * as All from "../reuse.tsx";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

const StyledPIndexId = styled.p`
    border-top: solid 2px hotpink;
`;

const StyledImg = styled.div`
    width: 40%;
    margin: auto;
`;

const StyledPIndex = styled.p`
    margin: 2vh 2vw;
`;

export default function IndexMain() {
    return(
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>Home</All.StyledH2>
                    <StyledImg>
                        <img src="/IMG_9702.jpeg" alt="Liala Jama"/>
                    </StyledImg>
                    <StyledPIndex><StyledPIndexId>&emsp;Hi! My name is <strong>Liala Jama</strong> and this is my online resume!
                    I'm a student at <strong>BU majoring in Computer Science</strong>. I've had a passion
                    for code since high school and I have had many opportunities to share this passion in
                    work, volunteering, and extracurriculars.</StyledPIndexId>
                    </StyledPIndex>
                    <StyledPIndex>&emsp;If you would like to learn more, explore this website! You can find my work experience, volunteering
                    experience,
                    education, projects, accolades, and references under their respective tabs.
                    </StyledPIndex>
                    <StyledPIndex>Thank you for visiting my online resume!</StyledPIndex>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
}