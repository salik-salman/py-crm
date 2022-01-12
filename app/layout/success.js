import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import proptypes from 'prop-types';
export class Alerts extends Component {
    static proptypes = {
        success:proptypes.object.isRequired
    }
    componentDidUpdate(){
        const { success } = this.props;
            alert.success(success);
        }
    render() {
        return <Fragment/>;
    }
}
const mapStatesToProps = state =>({
    success: state.success
});

export default connect(mapStatesToProps)(withAlert()(Alerts))
