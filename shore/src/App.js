import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar.js';
import Footer from './components/footer.js';
import Home from './pages/home.js'
import Play from './pages/play.js'
import About from './pages/about.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentPage: "Home"}
    
    this.updateCurrentPage = this.updateCurrentPage.bind(this)
  }
  
  updateCurrentPage(v) {
    this.setState({currentPage: v.target.innerHTML});
  }
  
  render() {
    return (
      <div className="App">
        <NavBar page={this.state.currentPage} onClick={this.updateCurrentPage}/>
        {this.state.currentPage === "Home" ? <Home/> : ""}
        {this.state.currentPage === "Forecast" ? <Forecast/> : ""}
        {this.state.currentPage === "Schedule" ? <Schedule/> : ""}
        <Footer/>
      </div>
    );
  }
}

export default App;
