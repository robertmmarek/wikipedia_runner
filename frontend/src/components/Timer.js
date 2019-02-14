import React from 'react';

class Timer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {running: props.run, passed_time: props.initialTime};
    }

    componentDidMount()
    {
        this.timerID = setInterval(()=>{
            if(this.state.running)
            {
                this.setState((state, props)=>{
                    let newTime = state.passed_time+props.increment;
                    let callbackPromise = new Promise((resolve)=>{this.props.onTick(newTime)});
                    return {passed_time: newTime};
                });
            }
        }, this.props.increment*1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    render()
    {
        return(
            <div className={this.props.className}>
                <h1>
                {formatTime(this.state.passed_time)}
                </h1>
            </div>
        );
    }
}

function formatTime(seconds)
{
    let out = "";

    let displaySeconds = Math.floor(seconds).toFixed(0) % 60;
    let minutes = Math.floor(seconds/60).toFixed(0) % 60;
    let hours = Math.floor(seconds/3600).toFixed(0);

    return hours.toString() + "h " + minutes.toString() + "m " + displaySeconds.toString() + "s";
}

Timer.defaultProps = {onTick: ()=>console.log('tick'), run: false, initialTime: 0, increment: 0.05, className: ""};

export default Timer;