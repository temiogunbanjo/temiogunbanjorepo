import './App.css';
import './resources/icofont/icofont.min.css';
import React from 'react';
import Preloader from './components/preloader';
import AppHeader from './components/header';
import MainComponent from './components/main';
import Footer from './components/footer';

import userpp from './resources/images (10).jpeg';
import nullimg from './resources/nullimg.png';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Firstname lastname',
      username: 'username',
      avatar: nullimg,
      profession: null,
      bio: 'loading...',
      repositories: [{isDummy: true}, {isDummy: true}]
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState((prevState) => {
        let changedState = {
          name: "temiloluwa ogunbanjo",
          avatar: userpp,
          profession: "Fullstack Web Developer",
          bio: `I am a self-taught fullstack web developer with ${new Date().getFullYear() - 2016} years experience using Javascript, Node.js, RESTful APIs, NoSQL Databases and RDBMS. I am also a part-time graphics designer, animator, and a final student in the University of Lagos.`
          // repositories: [
          //   {isDummy: true}, 
          //   {isDummy: true},
          // ]
        };
        
        let newState = Object.assign({}, prevState, changedState);
        return newState;
      });
    }, 5000);
  }

  render(){
    return (
      <React.Fragment>
        <Preloader user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession }/>
        <AppHeader user={this.state.name} avatar={this.state.avatar} />
        <MainComponent user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession } repos={this.state.repositories}/>
        <Footer /> 
      </React.Fragment>
    );
  }
}

export default App;
