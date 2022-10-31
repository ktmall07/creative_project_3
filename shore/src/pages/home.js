import React from 'react';
import './home.css';
import kids from './kids-on-pencil.png'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
          <div>
          <h1>Shore Consulting</h1>
          <img id="home-img" src={kids}/>
          <div id="home-info">
            Welcome to Shore Consulting. We provide all your Environmental consulting needs, in a fast and convenient package.<br/><br/>
            Check out our "Forecast" tab so that we can <br/><br/>
            Feel free to also visit our "About" tab to learn more about Young Learning's aims as a company. You will
            also find out more about our founder and how we began. We hope you enjoy!
          </div>
        </div>
    );
  }
}

export default Home;