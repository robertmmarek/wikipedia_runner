import React from 'react';
import getlorem from 'getlorem';

class LoremIpsum extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                {getlorem.words(this.props.words)}
            </div>
        );
    }
}

LoremIpsum.defaultProps = {words: 2};

export default LoremIpsum;