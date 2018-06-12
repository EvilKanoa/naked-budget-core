import React from 'react';
import _ from 'lodash';
import './index.css';

const HORIZONTAL_CONTAINER_KEY = 'VERTICAL_CONTAINER_CHILD_';

const getKey = (child) => {
    if (child.props.refKey) {
        return HORIZONTAL_CONTAINER_KEY + child.props.refKey;
    } else {
        console.warn('Child component in horizontal container does not have key, this will affect performance!');
        return _.uniqueId(HORIZONTAL_CONTAINER_KEY);
    }
};

const HorizontalContainer = props => {
    return (
        <div className={'horizontalContainer'}>
            {_.map(props.children, (child) => ( child.props.width ?
                    <div
                        style={{width: child.props.width}}
                        key={getKey(child)}
                    >
                        {child}
                    </div>
                    :
                    <div
                        className={'horizontalElement'}
                        key={getKey(child)}
                    >
                        {child}
                    </div>
            ))}
        </div>
    )
};

export default HorizontalContainer;