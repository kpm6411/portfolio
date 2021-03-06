import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return(
      <div className='contact-body'>
        <Grid className='contact-grid' style={{ marginTop: '20px', paddingBottom: '1.25em' }}>
          <Cell col={4}>
            <h3>Kevin Manning</h3>
            <img
              src="https://images2.imgbox.com/7e/90/UjASfM57_o.jpg"
              alt="portrait"
              style={{ height: '8em' }}
            />
          </Cell>
          <Cell col={8}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: '1.5em', fontFamily: 'sans-serif', justifyContent: 'center' }}>
                    {/* <i className="fa fa-envelope" style={{ fontSize: '1.5em' }} aria-hidden="true" /> */}
                    kevin@kevinmanning.net
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
