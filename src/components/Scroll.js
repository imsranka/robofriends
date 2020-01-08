import React from 'react';

const Scroll = (props) => {
    return (
        <div style= {{overflowY:'hidden'}}>
            <div style= {{overflowY: 'scroll', height: '800px' }}>
                { props.children }
            </div>
        </div>
    );
};

export default Scroll;
