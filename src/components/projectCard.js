import React, { Component } from 'react';
import { Cell, Card, CardTitle, CardActions, Button, CardMenu, CardText, IconButton } from 'react-mdl';

class ProjectCard extends Component{
  render() {
    const titleStyle = {
      color: '#fff',
      textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
      height: '176px',
      background: '#335599',
      backgroundImage: 'url('+this.props.background+')',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }

    let cardButtons = [];
    this.props.github ? cardButtons.push(
        <a href={this.props.github} rel="noopener noreferrer" target="_blank">
          <Button colored>Github</Button>
        </a>
      ) : cardButtons.push();
    this.props.codepen ? cardButtons.push(
        <a href={this.props.codepen} rel="noopener noreferrer" target="_blank">
          <Button colored>CodePen</Button>
        </a>
      ) : cardButtons.push();
    this.props.demo ? cardButtons.push(
        <a href={this.props.demo} rel="noopener noreferrer" target="_blank">
          <Button colored>Live Site</Button>
        </a>
      ) : cardButtons.push();

    return(
      <Cell col={4} tablet={12} phone={12}>
        <Card shadow={5} style={{ minWidth: '350px', margin: 'auto'}}>
          <CardTitle style={titleStyle}>
            {this.props.title}
          </CardTitle>
          <CardText style={{ borderBottom: '1px solid #ccc' }}>
            {this.props.text}
          </CardText>
          <CardActions>
            {cardButtons}
          </CardActions>
          <CardMenu style={{ color: '#fff' }}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
      </Cell>
    )
  }
}

export default ProjectCard;
