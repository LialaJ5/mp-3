import {styled} from "styled-components";
import * as All from "../reuse.tsx";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

const StyledH3Education = styled.h3`
    margin: 3vh 0 0 1vh;
    font-size: calc(2px + 2vw);
    border-left: solid 2px deeppink;
`;

const StyledLi = styled.li`
    font-size: calc(2px + 2vw);
    margin: 1vh 0 1vh 2vw;

    & a {
        font-weight: bold;
    }
`;

const StyledPEducation1 = styled.p`
    font-size: calc(1px + 1.5vw);
    margin-bottom: 3vh;
`;

const StyledPEducation2 = styled.p`
    font-size: calc(2px + 2vw);
    margin-bottom: 1vh;
    padding-top: 2vh;
    border-top: solid 2px deeppink;
`;

const StyledPEducation3 = styled.p`
    text-align: center;
    margin-top: 7vh;
    font-size: calc(2px + 2vw);

    & a {
        text-decoration: none;
    }
`;

export default function EducationMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>Education</All.StyledH2>
                    <div id="education-main-content">
                        <StyledH3Education>Boston University</StyledH3Education>
                        <StyledPEducation1><em>Bachelors in Computer Science (2026)</em></StyledPEducation1>
                        <StyledPEducation2>Notable Classes:</StyledPEducation2>
                        <ul>
                            <StyledLi>Introduction to Web Development</StyledLi>
                            <StyledLi>Introduction to Python</StyledLi>
                            <StyledLi>Discrete Math</StyledLi>
                            <StyledLi>Designing Algorithms</StyledLi>
                            <StyledLi>Software Engineering 101</StyledLi>
                        </ul>
                        <StyledPEducation3>More information about my degree in Computer Science can be found at <a href="https://www.bu.edu/cs/" target="_blank">BU's CS department website</a>!</StyledPEducation3>
                    </div>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
};