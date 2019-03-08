import React, {Component} from 'react';
import {connect} from 'react-redux';
import './smurfList.scss';
import {Button, Card, Form, Header, Input, Modal} from "semantic-ui-react";
import {deleteSmurf, updateSmurf, getSmurfs} from "../actions";


function mapStateToProps(state) {
    return {
        smurfs: state.smurfs
    };
}

class SmurfsList extends Component {

    state = {
        modal: false,
        name: '',
        height: '',
        age: '',
        id: null,
    };

    componentDidMount() {
        this.props.getSmurfs();
    }

    editSmurf = smurf => {
        this.setState({name: smurf.name, height: smurf.height, age: smurf.age, id: smurf.id, modal: true})
    };
    close = () => this.setState({modal: false});

    handleSubmit = e => {
        e.preventDefault();
        let name, age, height = '';
        name = e.target[0].value;
        height = e.target[1].value;
        age = e.target[1].value;

        let smurf = {
            name,
            age,
            height,
            id: this.state.id,
        };

        this.props.updateSmurf(smurf);
        this.setState({modal: false})
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };


    render() {
        return (
            <div className={"smurf-list"}>
                {this.props.smurfs.map((smurf) => {
                    return (
                        <Card key={smurf.id}>
                            <Card.Content>
                                <Card.Header>{smurf.name}</Card.Header>
                                <Card.Meta>age: {smurf.age}</Card.Meta>
                                <Card.Meta>height: {smurf.height}</Card.Meta>
                            </Card.Content>
                            <Card.Content extra>
                                <Button onClick={() => this.editSmurf(smurf)}>Edit</Button>
                                <Button onClick={() => this.props.deleteSmurf(smurf.id)}>Delete</Button>
                            </Card.Content>

                        </Card>
                    )
                })}

                <Modal open={this.state.modal} closeOnDimmerClick={true} onClose={this.close}>
                    <Modal.Content>
                        <Header>Edit Smurf</Header>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field value={this.state.name} name={"name"} control={Input} onChange={this.onChange}/>
                            <Form.Field value={this.state.height} name={"height"} control={Input}
                                        onChange={this.onChange}/>
                            <Form.Field value={this.state.age} name={"age"} control={Input} onChange={this.onChange}/>
                            <Button>Save</Button>
                        </Form>
                    </Modal.Content>

                </Modal>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    {getSmurfs, deleteSmurf, updateSmurf}
)(SmurfsList);