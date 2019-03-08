import React, { Component } from 'react';
import './App.scss';
import SmurfsList from "./SmurfsList";
import {Button, Container, Form, Grid, Header, Image, Input, Segment, Sidebar} from "semantic-ui-react";
import {addSmurf} from "../actions";
import {connect} from "react-redux";


/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  state = {
    visible: true
  };

  changeSideBar = () => {
    this.setState({visible: !this.state.visible});
  };

  handleSubmit = e => {
    e.preventDefault();

    let name, age, height = '';

    name= e.target[0].value;
    height = e.target[1].value;
    age = e.target[2].value;

    let smurf = {
      name,
      height,
      age,
    };

    this.props.addSmurf(smurf);
    for(let i = 0; i < 3; i++){
      e.target[i].value = '';
    }

  };

  render() {
    return (
        <Container>
          <Header as='h2'>
            Smurfs
            <Header.Subheader>Build and manage your smurf village here.</Header.Subheader>
          </Header>
          <SmurfsList/>
          <Button onClick={this.changeSideBar}/>
          <Sidebar as={Segment} animation={"scale down"} direction={"right"} visible={this.state.visible}>
            <Grid textAlign='center'>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Header as='h3'>Add Smurf</Header>
                </Grid.Column>
              </Grid.Row>
            <Grid.Row>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field control={Input} label={"Name"} name={"name"} />
                <Form.Field control={Input} label={"Height"} name={"height"} />
                <Form.Field control={Input} label={"Age"} name={"age"} />
                <Button>Add</Button>
              </Form>
            </Grid.Row>
            </Grid>
          </Sidebar>
        </Container>
    );
  }
}

export default connect(null, {addSmurf})( App );
