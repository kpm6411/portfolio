import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">
        <Grid>
          <Cell col={4} className="resume-left">
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
              />
            </div>
            <h2 style={{paddingTop: '2em'}}>Kevin Manning</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Email</h5>
            <p>someone@example.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>

          <Cell col={8} className="resume-right">
            <h2>Education</h2>
            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Vanderbilt University"
              schoolDescription="Lorem Ipsum a fada dfh adfha fdha"
            />
            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Vanderbilt University"
              schoolDescription="Lorem Ipsum a fada dfh adfha fdha"
            />
            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Vanderbilt University"
              schoolDescription="Lorem Ipsum a fada dfh adfha fdha"
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2019}
              jobName="CrowdMed Inc."
              jobDescription="Lorem Ipsum a fada dfh adfha fdha"
            />
            <Experience
              startYear={2017}
              endYear={2019}
              jobName="CrowdMed Inc."
              jobDescription="Lorem Ipsum a fada dfh adfha fdha"
            />
            <Experience
              startYear={2017}
              endYear={2019}
              jobName="CrowdMed Inc."
              jobDescription="Lorem Ipsum a fada dfh adfha fdha"
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="JavaScript"
              progress={66}
            />
            <Skills
              skill="JavaScript"
              progress={66}
            />
            <Skills
              skill="JavaScript"
              progress={66}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
