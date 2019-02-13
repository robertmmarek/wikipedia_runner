import React from 'react';
import '../styles/App.css';
import LoremIpsum from './LoremIpsum.js';
import {BrowserRouter as Router,
        Route,
        Link} from 'react-router-dom';


const Home = () =>
(
        <div>
            <h2>HOME</h2>
        </div>
)

const About = () =>
{
    return(
        <div>
            <h2>ABOUT</h2>
        </div>
    );
}


class App extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <div className={"container"}>
                    <div className={"row justify-content-center mt-md-1 mt-lg-1 mt-sm-0"}>
                        <div className={"col-sm-12 col-md-12 col-lg-9 py-y card no-y-margin rounded-pill bg-dark shadow text-light"}>
                            HEJ
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-sm-12 col-md-12 col-lg-9 py-2 card minimal-y-margin rounded-pill shadow"}>
                            HEJ
                        </div>
                    </div>
                </div>

                <div className={"background-layer text-justify font-italic text-muted d-none d-sm-none"}>
                    <LoremIpsum words={500} />
                </div>

                <div className={"background-layer text-justify font-italic text-muted d-none d-md-block d-lg-none"}>
                    <LoremIpsum words={5000} />
                </div>

                <div className={"background-layer text-justify font-italic text-muted d-none d-lg-block d-xl-none"}>
                    <LoremIpsum words={20000} />
                </div>

                <div className={"background-layer text-justify font-italic text-muted d-none d-xl-block"}>
                    <LoremIpsum words={30000} />
                </div>
            </div>
        );
    }
}

export default App;