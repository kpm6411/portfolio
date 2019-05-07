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
        <Grid className="projects-grid">
          <ProjectCard
            title="Portfolio"
            background="https://www.shareicon.net/download/2016/05/24/769984_man_512x512.png"
            text="The portfolio site you are currently viewing."
            github="https://www.github.com/kpm6411/portfolio"
            live="http://www.kevinmanning.net"
          />

          <ProjectCard
            title="Wrappr"
            background="http://wrappr.herokuapp.com/static/media/Solstice.428ba1f6.png"
            text="Web app for previewing vinyl car wrap colors."
            github="https://www.github.com/kpm6411/wrappr"
            live="http://wrappr.herokuapp.com/"
          />

          <ProjectCard
            title="Nutricalc"
            background="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-fEFnRvRIldl4embNrrewwHaE8%26pid%3DApi&f=1"
            text="Web app for calculating nutrition information."
            github="https://www.github.com/kpm6411/nutricalc"
            codepen=""
            live="http://nutricalc.herokuapp.com/"
          />

          <ProjectCard
            title="Game of Life"
            background="https://upload.wikimedia.org/wikipedia/commons/e/e5/Gospers_glider_gun.gif"
            text="React version of Conway's Game of Life."
            codepen="https://www.codepen.io/kpm6411/xEEBXa"
            demo="https://www.codepen.io/kpm6411/full/xEEBXa"
          />

          <ProjectCard
            title="Simon"
            background="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.rcsA3U2fZrS5TeBTmkJ8PAHaGc%26pid%3DApi&f=1"
            text="Simon game made with jQuery and CSS."
            codepen="https://www.codepen.io/kpm6411/qbbzKB"
            demo="https://www.codepen.io/kpm6411/full/qbbzKB"
          />

          <ProjectCard
            title="Tic-Tac-Toe"
            background="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcppcodetips.files.wordpress.com%2F2015%2F12%2Ftic-tac-toe.png%3Fw%3D640&f=1"
            text="Tic-Tac-Toe game made with jQuery and CSS."
            codepen="https://www.codepen.io/kpm6411/XXmYEY"
            demo="https://www.codepen.io/kpm6411/full/XXmYEY"
          />

          <ProjectCard
            title="Pomodoro Timer"
            background="https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Frecruitmentcoach.com%2Fwp-content%2Fuploads%2F2015%2F02%2FPomodoroXLarge2.jpg&f=1"
            text="Study/work timer made with jQuery and CSS."
            codepen="https://www.codepen.io/kpm6411/pjVNbE"
            demo="https://www.codepen.io/kpm6411/full/pjVNbE"
          />
        </Grid>

      )
    } else {
      return (
        <div><h1>Loading...</h1></div>
      )
    }
  }

  render() {
    return(
      <div>
        <Tabs style={tabBarStyle} activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={tabStyle}>Projects</Tab>
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
