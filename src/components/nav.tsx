import { Link } from "react-router";
import { styled } from "styled-components";

const StyledNav = styled.nav`
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    list-style: none;
    font-size: calc(3px + 3vw);
    font-family: Helvetica, Damascus, Arial, sans-serif;
    border: solid 2px darkblue;
    text-decoration: none;
    
    @media screen and (max-width: 750px) {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        text-decoration: none;
    }
`;

const StyledLink = styled(Link)`
    border-bottom: solid 2px darkblue;
    
    @media screen and (max-width: 750px) {
        padding: 0 1vw;
        font-size: calc(1px + 1.5vw);
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/work">Work</StyledLink>
            <StyledLink to="/volunteering">Volunteering</StyledLink>
            <StyledLink to="/education">Education</StyledLink>
            <StyledLink to="/projects">Projects</StyledLink>
            <StyledLink to="/accolades">Accolades</StyledLink>
            <StyledLink to="/references">References</StyledLink>
        </StyledNav>
    );
}