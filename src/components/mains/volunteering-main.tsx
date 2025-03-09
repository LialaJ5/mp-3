import * as All from "../reuse.tsx";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

export default function VolunteeringMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>Volunteering</All.StyledH2>
                    <All.StyledContain>
                        <All.StyledImageContain>
                            <img src="/girls.png" alt="The Girls Who Code logo"/>
                        </All.StyledImageContain>
                        <p>Girls Who Code</p>
                    </All.StyledContain>
                    <All.StyledList>
                        <ul>
                            <li>Taught fundamentals in Python and computer science to students grades 6-12</li>
                            <li>Created interactive learning activities to keep students interested and engaged</li>
                        </ul>
                    </All.StyledList>
                    <All.StyledContain>
                        <All.StyledImageContain>
                            <img src="/brook.png" alt="The Brookline Food Pantry logo"/>
                        </All.StyledImageContain>
                        <p>Brookline<br/>Food Pantry</p>
                    </All.StyledContain>
                    <All.StyledList>
                        <ul>
                            <li>Set up food distribution and handling to serve neighborhoods experiencing food deserts</li>
                            <li>Organized boxes and managed inventory to make distributing as efficient as possible</li>
                        </ul>
                    </All.StyledList>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    )
};