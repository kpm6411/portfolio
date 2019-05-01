import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Homepage extends Component {
  render() {
    return(
      <div>
        <Grid className="grid">
          <Cell col={12}>
            <img src="https://images3.imgbox.com/04/09/HfttYAzX_o.jpg" alt="Kevin" className="portrait" />
            <div className="banner">
              <h1>Full Stack Web Developer</h1>
              <hr/>
              <p>HTML | CSS | JavaScript | React | NodeJS | MongoDB</p>
              <div className="social-links">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/kevinmsoftware" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/kpm6411" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* FreeCodeCamp */}
                <a href="https://medium.freecodecamp.org/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Homepage;
