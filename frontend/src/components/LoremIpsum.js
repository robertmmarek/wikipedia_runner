import React from 'react';
import getlorem from 'getlorem';

export default class LoremIpsum extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div>
                {this.props.words>0?getlorem.words(this.props.words):this.props.text}
            </div>
        );
    }
}

export function generateNWords(n)
{
    return getlorem.words(n);
}

LoremIpsum.defaultProps = {words: 0, text: ''};


