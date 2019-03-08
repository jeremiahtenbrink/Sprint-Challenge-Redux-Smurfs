import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from "../actions";


function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    };
}

class SmurfsList extends Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        return (
            <div>
                {this.props.smurfs.map((smurf) => {
                    return <h1>{smurf.name} <span className={"age"}>age: {smurf.age}</span>
                        <span className={"height"}>height: {smurf.height}</span></h1>
                })}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfsList);