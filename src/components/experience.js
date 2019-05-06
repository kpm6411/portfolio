import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    let list = [];
    this.props.desc1 ? list.push(<li><p>{this.props.desc1}</p></li>) : list.push();
    this.props.desc2 ? list.push(<li><p>{this.props.desc2}</p></li>) : list.push();
    this.props.desc3 ? list.push(<li><p>{this.props.desc3}</p></li>) : list.push();
    this.props.desc4 ? list.push(<li><p>{this.props.desc4}</p></li>) : list.push();

    return(
      <Grid>
        <Cell col={4}>
          <h5>{this.props.startYear} - {this.props.endYear}</h5>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}><b>{this.props.jobName}</b></h4>
          <h5>{this.props.position}</h5>
          <ul>
            {list}
          </ul>
          <hr/>
        </Cell>
      </Grid>
    )
  }
}

export default Experience;
