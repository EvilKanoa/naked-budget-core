import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { getPage } from '../../../selectors/appState';
import { setPage } from "../../../actions/appState";
import Pages from '../../pages/index';
import Icon from '@fortawesome/react-fontawesome';
import './index.css';

const SidebarButton = connect(
    (state, props) => ({
        selected: getPage(state) === props.id
    }),
    (dispatch) => bindActionCreators({
        setPage
    }, dispatch)
)(class SidebarButton extends PureComponent {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
    };

    onClick = () => {
        this.props.setPage(this.props.id);
    };

    render = () => {
        const { icon, title, selected } = this.props;

        return (
            <button
                className={'sidebar-button ' + (selected ? 'sidebar-button-selected' : '')}
                onClick={this.onClick}
            >
                <Icon
                    icon={icon}
                    fixedWidth
                />
                <span className='sidebar-button-title'>
                    {title}
                </span>
                {selected &&
                <Icon
                    icon='caret-right'
                    className='sidebar-button-selected-icon'
                />
                }
            </button>
        );
    };
});

const Sidebar = () => {
    return (
        <div id='sidebar'>
            {_.map(Pages, (page) => (
                <SidebarButton {...page} key={page.id}/>
            ))}
        </div>
    )
};

export default Sidebar;
