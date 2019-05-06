import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <h5>{this.props.startYear} - {this.props.endYear}</h5>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}><b>{this.props.schoolName}</b></h4>
          <h6>{this.props.schoolDescription}</h6>
        </Cell>
      </Grid>
    )
  }
}

export default Education;
