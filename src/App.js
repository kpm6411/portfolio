import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import { Link } from 'react-router-dom';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header transparent="true" title="Kevin Manning" scroll>
                <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="Kevin Manning">
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content className='content'>
                <Main/>
            </Content>
        </Layout>
    </div>
    </div>
  );
}

export default App;
