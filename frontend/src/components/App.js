import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../styles/App.css';
import LoremIpsum from './LoremIpsum.js';
import {generateNWords} from './LoremIpsum';
import StartGamePanel from './StartGamePanel';
import RulesExplanation from './RulesExplanation';
import Timer from './Timer';
import TargetLabel from './TargetLabel';
import {BrowserRouter as Router,
        Route,
        Link} from 'react-router-dom';

let AppStateEnum = {idle: 0, game_start: 1, load: 2, playing: 3, game_finish: 4, save_score: 5};
Object.freeze(AppStateEnum);

class App extends React.Component{
    constructor(props)
    {
        window.appLanguage = props.language;
        super(props);
        this.loremIpsums = {small: generateNWords(500), medium: generateNWords(5000), big: generateNWords(50000)};
        this.state = {
            gameState: AppStateEnum.idle,
            timePassed: 0.0
        };
    }

    render(){
        return(
            <div>
                <div className={"container"}>
                    <div className={"row justify-content-center mt-md-1 mt-lg-1 mt-sm-0"}>
                        <div className={"col-sm-12 col-md-12 col-lg-9 py-3 card no-y-margin rounded-pill bg-dark shadow text-light"}>
                                {this.state.gameState === AppStateEnum.idle?
                                <StartGamePanel key="start-game-panel" onConfirm={()=>this.setState({gameState: AppStateEnum.game_start})}/>
                                :[]}

                                {[AppStateEnum.game_start, AppStateEnum.load, AppStateEnum.playing].includes(this.state.gameState)?
                                <div className="container">
                                    <div className="row align-items-center">
                                        <TargetLabel className="col-lg-6 col-md-6 col-sm-12 text-center"/>
                                        <Timer run={true} 
                                               onTick={(seconds)=>this.setState({timePassed: seconds})} 
                                               increment={0.1} 
                                               className="col-lg-6 col-md-6 col-sm-12 text-center"/>
                                    </div>
                                </div>
                                :[]}
                        </div>
                    </div>
                    <div className={"row justify-content-center"}>
                        <div className={"col-sm-12 col-md-12 col-lg-9 py-3 card minimal-y-margin shadow"}>
                                {this.state.gameState === AppStateEnum.idle?
                                <RulesExplanation key="rules-explanation"/>
                                :[]}
                        </div>
                    </div>
                </div>

                <div className={"background-layer text-justify font-italic font-weight-light text-muted d-none d-sm-none"}>
                    <LoremIpsum text={this.loremIpsums.small} />
                </div>

                <div className={"background-layer text-justify font-italic font-weight-light text-muted d-none d-md-block d-lg-none"}>
                    <LoremIpsum text={this.loremIpsums.medium} />
                </div>

                <div className={"background-layer text-justify font-italic font-weight-light text-muted d-none d-lg-block d-xl-none"}>
                    <LoremIpsum text={this.loremIpsums.big} />
                </div>

                <div className={"background-layer text-justify font-italic font-weight-light text-muted d-none d-xl-block"}>
                    <LoremIpsum text={this.loremIpsums.big} />
                </div>
            </div>
        );
    }
}

App.defaultProps = {language: 'en'};

export default App;