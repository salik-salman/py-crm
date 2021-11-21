import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
export class Alerts extends Component {
    static proptypes = {
        error:proptypes.object.isRequired
    }
    componentDidUpdate(prevProps){
        const { error,alert } = this.props;
        if(error !== prevProps.error){
            const key = Object.keys(error.msg)[0];
            const field = key.split('_').slice(1).join();
            alert.error(field.replace(',',' ')+': '+error.msg[key]);
        }
    }
    render() {
        return <Fragment/>;
    }
}
const mapStatesToProps = state =>({
    error: state.errors
});

export default connect(mapStatesToProps)(withAlert()(Alerts))
