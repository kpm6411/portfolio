import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
  render() {
    return(
      <Grid>
        <Cell col={12}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignContent: 'center'}}>
            <h5>{this.props.skill}</h5> <ProgressBar style={{width: '75%', marginTop: 'auto', marginBottom: 'auto'}} progress={this.props.progress}/>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default Skills;
