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
                src="https://www.shareicon.net/download/2016/05/24/770078_man_512x512.png"
                alt="avatar"
                style={{height: '200px', marginBottom: '-3em'}}
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
              schoolDescription="Bachelor of Arts"
            />
            <Education
              startYear={2013}
              endYear={2014}
              schoolName="Indiana University"
              schoolDescription="1-Year FLAS Graduate Fellowship"
            />
            <Education
              startYear={2015}
              endYear={2017}
              schoolName="Free Code Camp"
              schoolDescription="Front End Development Certification"
              last={true}
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Experience</h2>
            <Experience
              startYear={2017}
              endYear={2019}
              jobName="CrowdMed Inc."
              position="Quality Assurance Engineer"
              desc1="Manual Testing - Testing and reporting functionality of website on both front end and back end."
              desc2="Automated Testing - Designing and writing automated tests for website functionality using Selenium Webdriver."
              desc3="Unit Testing - Some work writing and optimizing unit tests within the core website code."
              desc4="Bugfixing - Some work identifying, analyzing, and correcting errors within the core website code."
            />
            <Experience
              startYear={2014}
              endYear={2018}
              jobName="Southern Printing & Graphics"
              position="Screen Printing Specialist"
              desc1="Substrate, screen, ink, reclaim, and set-up knowledge."
              desc2="Precise registration techniques with both single and multicolor screen printing."
              desc3="Complete understanding of mesh counts, coating, and exposure."
              desc4="Check printed items during production run for quality, making corrective adjustments as needed."
            />
            <Experience
              startYear={2013}
              endYear={2013}
              jobName="Hunter Museum of American Art"
              position="Curatorial Intern"
              desc1="Organized and executed large scale projects in deaccession, provenance, and copyright acquisition."
              desc2="Performed extensive archival work, both physical and digital."
              desc3="Provided general assistance to museum curators."
            />
            <Experience
              startYear={2012}
              endYear={2013}
              jobName="TecStyle"
              position="Art Management"
              desc1="Produced and sold printed phone cases for an online Etsy shop."
              desc2="Researched and managed files used for production."
              last={true}
            />

            <hr style={{borderTop: '3px solid #e22947'}}/>
            <h2>Skills</h2>
            <Skills
              skill="HTML/CSS"
              progress={100}
            />
            <Skills
              skill="JavaScript"
              progress={100}
            />
            <Skills
              skill="React"
              progress={90}
            />
            <Skills
              skill="Selenium"
              progress={80}
            />
            <Skills
              skill="NodeJS"
              progress={60}
            />
            <Skills
              skill="MongoDB"
              progress={60}
            />
            <Skills
              skill="C#/.NET"
              progress={30}
            />
            <Skills
              skill="Ruby"
              progress={10}
            />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
