import React from 'react';

class TargetLabel extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className={this.props.className}>
                <h3>Target article:</h3>
                <h2>AAAAAAAAAAAAA</h2>
            </div>
        );
    }
}

TargetLabel.defaultProps = {className: ""}

export default TargetLabel;
