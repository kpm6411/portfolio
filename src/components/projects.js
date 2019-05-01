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
        <div><h1>This is React</h1></div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if (this.state.activeTab === 2) {
      return (
        <div><h1>This is Vue</h1></div>
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
          <Tab style={tabStyle}>VueJS</Tab>
          <Tab style={tabStyle}>MongoDB</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects;
