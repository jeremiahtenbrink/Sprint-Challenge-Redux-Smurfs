import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSmurfs} from "../actions";
import './smurfList.scss';
import {Button, Card, Header, Modal} from "semantic-ui-react";
import {deleteSmurf,updateSmurf} from "../actions";


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
                    return (
                    <Card key={smurf.id}>
                        <Card.Content>
                            <Card.Header>{smurf.name}</Card.Header>
                            <Card.Meta>age: {smurf.age}</Card.Meta>
                            <Card.Meta>height: {smurf.height}</Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>Edit</Button>
                            <Button onClick={()=> this.props.deleteSmurf(smurf.id)}>Delete</Button>
                        </Card.Content>

                    </Card>
                    )
                })}

                <Modal trigger={<Button>Show Modal</Button>}>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                            <Header>Default Profile Image</Header>
                            <p>We've found the following gravatar image associated with your e-mail address.</p>
                            <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {getSmurfs, deleteSmurf}
)(SmurfsList);