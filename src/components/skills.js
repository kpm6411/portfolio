import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

const barStyle = {
  width: '60%',
  marginTop: 'auto',
  marginBottom: 'auto'
}

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <h4>{this.props.skill}</h4> <ProgressBar style={barStyle} progress={this.props.progress}/>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
