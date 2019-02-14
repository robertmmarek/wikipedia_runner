import React from 'react';


class StartGamePanel extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        let tooltipText = "Get random entry article and random finish article, start counting time";
        return(
        <div>
            <button className={"btn btn-primary btn-light btn-block rounded-pill font-weight-bold"} 
                    title={tooltipText} 
                    onClick={this.props.onConfirm}>
                START
            </button>
        </div>
        );
    }
}

StartGamePanel.defaultProps = {onConfirm: ()=>console.log('game start confirmed')};

export default StartGamePanel;