import React from 'react';
import '../nav-bar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
          <nav>
              <div id="logo">Shore Consulting</div>
              <div className={this.props.page === "Home" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>Home</div>
              <div className={this.props.page === "Forecast" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>Forecast</div>
              <div className={this.props.page === "Schedule" ? "selected clickable" : "clickable"}
              onClick={this.props.onClick}>Schedule</div>
          </nav>
    );
  }
}

export default NavBar;