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
                    props.onTick(newTime);
                    return {passed_time: newTime};
                });
            }
        }, this.props.increment);
    }

    componentWillUnmount()
    {
        clearInterval(this.timerID);
    }

    render()
    {
        return(
            <div>
                <h1>
                {this.state.passed_time.toFixed(2).toString()+"s"}
                </h1>
            </div>
        );
    }
}

function formatTime(seconds)
{
    let out = "";
    return out;
}

Timer.defaultProps = {onTick: ()=>console.log('tick'), run: false, initialTime: 0, increment: 0.05};

export default Timer;