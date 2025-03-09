import {useState} from "react";
import {styled} from  "styled-components";

const StyledProjectMainContent = styled.div`
    margin: 0;
    justify-content: center;

    & h3 {
        color: navy;
        margin: 1vh 1vw;
        font-size: calc(3px + 3vw);
        text-align: center;
    }
    
    & p {
        font-size: calc(2px + 2vw);
        text-align: center;
        border: solid 10px royalblue;
        background-color: deepskyblue;
        padding: 2vh 2vw;
        color: ivory;
        margin: 0.5vh 0.5vw;
    }
    
    @media screen and (max-width: 750px) {
        & p {
            font-size: calc(2px + 2vw);
            border: solid 3px royalblue;
            padding: 3vh 3vw;
        }
    }
    
    & img {
        max-width: 100%;
        padding: 0;
        margin: 0;
    }
`;

const StyledProjectInputs = styled.div`
    font-size: calc(2px + 2vw);
    display: flex;
    flex-direction: row;
    justify-content: center;

    & input {
        font-size: calc(1px + 1vw);
        background-color: deepskyblue;
        font-weight: bold;
        color: ivory;
        border: solid 10px royalblue;
        padding: 1vh 1vw;
        text-align: center;
    }
    
    @media screen and (max-width: 750px) {
        & input {
            border: solid 3px royalblue;
            padding: 2vh 2vw;
            font-size: calc(1px + 1.5vw);
        }
    }
`;

const StyledProjectInput = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2vh 2vw;
    padding: 1vh 1vw;
    text-align: center;
`;

const StyledProjectButtonContain = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    
    & button {
        font-size: calc(2px + 2vw);
        border-radius: 50%;
        border-color: mediumaquamarine;
        background-color: mediumseagreen;
        padding: 1vh 2vw;
        margin: 0.5vh 0.5vw;
        color: blue;
    }
`;

const StyledProjectClear = styled.button`
    border: solid deepskyblue 2px;
    background-color: darkseagreen;
    color: blue;
`;

function power(num1: number, num2: number, num: number):number {
    for (let i = 0; i < num2; i++) {
        if (num2 === 0) {
            num = 1;
        } else {
            for (let i = 1; i < Math.abs(num2); i++) {
                num = num * num1;
            }
        }
        if (num2 < 0) {
            num = 1/num;
        }
    }
    return num;
}


export default function Projects() {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    const [result, setResult] = useState(0);

    return(
        <StyledProjectMainContent>
            <h3>Calculator</h3>
            <StyledProjectInputs>
                <StyledProjectInput>
                    <input type="number" placeholder="First Number" value={firstNumber} onChange={(e) => setFirstNumber(Number(e.target.value))}/>
                </StyledProjectInput>
                <StyledProjectInput>
                    <input type="number" placeholder="Second Number" value={secondNumber} onChange={(e) => setSecondNumber(Number(e.target.value))}/>
                </StyledProjectInput>
            </StyledProjectInputs>
            <StyledProjectButtonContain>
                <button onClick={() => setResult(() => (firstNumber + secondNumber))}>+</button>
                <button onClick={() => setResult(firstNumber - secondNumber)}>-</button>
            </StyledProjectButtonContain>
            <StyledProjectButtonContain>
                <button onClick={() => setResult(firstNumber * secondNumber)}>*</button>
                <button onClick={() => setResult(firstNumber / secondNumber)}>/</button>
            </StyledProjectButtonContain>
            <StyledProjectButtonContain>
            <button onClick={() => setResult((result) => power(firstNumber, secondNumber, result))}>**</button>
            </StyledProjectButtonContain>
            <StyledProjectButtonContain>
            <StyledProjectClear onClick={() => setResult(() => 0)}>Clear</StyledProjectClear>
            </StyledProjectButtonContain>
            <p>{result}</p>
            <img src="/bubbless.png" alt="A group of bubbles"/>
        </StyledProjectMainContent>
    )
}