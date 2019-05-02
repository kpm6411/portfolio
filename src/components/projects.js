import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

const tabBarStyle = {
  backgroundColor: "white",
  borderTop: "solid 1px white"
}

const tabStyle = {
  color: "black"
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'red' }}>React Project #1</CardTitle>
            <CardText style={{ borderBottom: '1px solid #ccc' }}>
              Lorem ipsum asdg asfg ik k;j ;la wr;lk ae;lrj
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'green' }}>React Project #2</CardTitle>
            <CardText style={{ borderBottom: '1px solid #ccc' }}>
              Lorem ipsum asdg asfg ik k;j ;la wr;lk ae;lrj
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
            <CardTitle style={{ color: '#fff', height: '176px', background: 'blue' }}>React Project #3</CardTitle>
            <CardText style={{ borderBottom: '1px solid #ccc' }}>
              Lorem ipsum asdg asfg ik k;j ;la wr;lk ae;lrj
            </CardText>
            <CardActions>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: '#fff' }}>
              <IconButton name='share' />
            </CardMenu>
          </Card>
        </div>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else{
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs style={tabBarStyle} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={tabStyle}>React</Tab>
          <Tab style={tabStyle}>Angular</Tab>
          <Tab style={tabStyle}>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
