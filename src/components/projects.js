import React, { Component } from 'react';
import { Tab, Tabs, Grid, Cell } from 'react-mdl';
import ProjectCard from './projectCard';

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
          <ProjectCard
            title="Portfolio"
            background="https://www.shareicon.net/download/2016/05/24/769984_man_512x512.png"
            text="The portfolio site you are currently viewing."
            github="https://www.github.com/kpm6411/portfolio"
            demo="http://www.kevinmanning.net"
          />

          <ProjectCard
            title="Wrappr"
            background="http://wrappr.herokuapp.com/static/media/Solstice.428ba1f6.png"
            text="Web app for previewing vinyl car wrap colors."
            github="https://www.github.com/kpm6411/wrappr"
            codepen=""
            demo="http://wrappr.herokuapp.com/"
          />

          <ProjectCard
            title="Nutricalc"
            background="blue"
            text="Web app for calculating nutrition information."
            github="https://www.github.com/kpm6411/nutricalc"
            codepen=""
            demo="http://nutricalc.herokuapp.com/"
          />
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
