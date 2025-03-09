import styled from "styled-components"

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: column;
    padding: 0 1vw;
    width: 100%;
    background-color: lavender;
    color: black;
    font-size: calc(2px + 2vw);
    font-family: Helvetica, sans-serif;
    border: solid 2px darkblue;

    & p {
        font-weight: bold;
        font-size: calc(2px + 2vw);
    }
    
    @media screen and (max-width: 750px) {
        align-items: center;
    }
`;

export default function Header() {
    return (
        <HeaderWrapper>
            <h1>Liala Jama</h1>
            <p>&nbsp;Online Resume</p>
        </HeaderWrapper>
    )
}