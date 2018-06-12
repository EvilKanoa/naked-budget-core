import React from 'react';
import _ from 'lodash';
import './index.css';

const VERTICAL_CONTAINER_KEY = 'VERTICAL_CONTAINER_CHILD_';

const getKey = (child) => {
    if (child.props.refKey) {
        return VERTICAL_CONTAINER_KEY + child.props.refKey;
    } else {
        console.warn('Child component in vertical container does not have key, this will affect performance!');
        return _.uniqueId(VERTICAL_CONTAINER_KEY);
    }
};

const VerticalContainer = props => {
    return (
        <div>
            {_.map(props.children, (child => (
                <div
                    style={{height: child.props.height || '100%'}}
                    key={getKey(child)}
                >
                    {child}
                </div>
            )))}
        </div>
    );
};

export default VerticalContainer;