import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 150, //changes typing speed so its a bit more realistic lookin
            strings: ['Developer', 'React Developer', 'Designer']
        })
    }, [])

    return (
        <div className="intro" id="intro">{/* This is the intro element that defines the whole page*/}
            <div className="left"> {/*within in the intro element there is a left element stored in there */}
                <div className="imageContainer">
                    <img src='https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=DarkBrown' alt=""
                    /> {/*Changed the front image to that of an avatar using this io and adapted to
                          match the code*/}
                    {/*<img src="assets/portfolio_picture.png" alt="" />*/}{/*and within that element is an another element which holds the image we use */}
                </div>
            </div>
            <div className="right">{/*This section is the right side of the page we are working on */}
                <div className="wrapper">{/*within this section there is a wrapper class that is basically introducing myself as a junior developer */}
                    <h2>Hi there, I am</h2>
                    <h1>Peter Graeson</h1>{/*h1 tends to be the main title and any incriment of that becomes smaller in size */}
                    <h3>Junior <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio"> {/*This is an anchor element that pretains to the portfolio section of our website */}
                    <img src="assets/down.png" alt="" /> {/*within in the anchor element we are using an arrow pointed down image */}
                </a>
            </div>

        </div>
    )
}
// additionall comments
// if you want to create a class quickly use the . and the name for the class for example .hello will create --> <div className="hello"></div>
// granted this only works if you are using the ES7+ React extension