import {styled} from "styled-components";

const StyledFooter = styled.footer`
    background-color: cornsilk;
    color: darkcyan;
    padding: 1vh 1vw;
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;

    & p {

        & a {
            text-decoration: none;
        }
    }
`;

export default function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Liala Jama <a href="">Credits</a>&#169;</p>
        </StyledFooter>
    );
}