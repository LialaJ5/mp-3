import * as All from "../reuse.tsx";
import Header from "../header.tsx";
import Nav from "../nav.tsx";
import Footer from "../footer.tsx";

export default function WorkMain() {
    return (
        <All.StyledBodyContent>
            <Header/>
            <All.StyledNavMain>
                <Nav/>
                <All.StyledMain>
                    <All.StyledH2>Work</All.StyledH2>
                    <All.StyledContain>
                        <All.StyledImageContain>
                            <img src="/csto.jpeg" alt="The Square Tech Logo"/>
                        </All.StyledImageContain>
                        <p>Square Tech</p>
                    </All.StyledContain>
                    <All.StyledList>
                        <ul>
                            <li>Enrolled in Computer Hardware, Networking, Computer Science, and Business classes</li>
                            <li>Applied learned knowledge to final projects currently showcased on the company’s website</li>
                        </ul>
                    </All.StyledList>
                    <All.StyledContain>
                        <All.StyledImageContain>
                            <img src="/uDesign.png" alt="The U-Design logo"/>
                        </All.StyledImageContain>
                    </All.StyledContain>
                    <All.StyledList>
                        <ul>
                            <li>Taught essential engineering concepts to teens from grades 6 - 12</li>
                            <li>Assisted with final projects utilizing 3D printing and Arduino programming</li>
                            <li>Created a STEM curriculum that gave every student the opportunity to be an engineer</li>
                        </ul>
                    </All.StyledList>
                </All.StyledMain>
            </All.StyledNavMain>
            <Footer/>
        </All.StyledBodyContent>
    );
}