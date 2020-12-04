// Import styles
import './App.css';
import './resources/styles/clamp.min.css';

// import react components
import React from 'react';
import Preloader from './components/preloader';
import AppHeader from './components/header';
import MainComponent from './components/main';
import Footer from './components/footer';

// import other resources
import userpp from './resources/images/images (10).jpeg';
import nullimg from './resources/images/nullimg.png';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'What\'s my name?',
      username: 'username',
      avatar: nullimg,
      profession: null,
      bio: 'Please wait. Loading all my data...',
      skills: [{isDummy: true}, {isDummy: true}, {isDummy: true}, {isDummy: true}],
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
          bio: `I am a self-taught fullstack web developer with ${new Date().getFullYear() - 2016} years experience using Javascript, Node.js, RESTful APIs, NoSQL Databases and RDBMS. I am also a part-time graphics designer, animator, and a final student in the University of Lagos.`,
          skills: [
            {name: "NodeJS", bgColor: "#1e1e1e", level: 7},
            {name: "Javascript", bgColor: "rgb(0, 122, 245)", level: 9},
            {name: "MySQL", bgColor: "crimson", level: 7},
            {name: "MongoDB", bgColor: "green", level: 6},
            {name: "REST API", bgColor: "orangered", level: 6},
            {name: "ReactJS", bgColor: "orange", level: 6},
            {name: "GraphQL", bgColor: "purple", level: 2.5},
            {name: "AWS Lambda", bgColor: "red", level: 5.5}
          ]
        };
        
        let newState = Object.assign({}, prevState, changedState);
        return newState;
      });
    }, 9000);
  }

  render(){
    return (
      <React.Fragment>
        <Preloader user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession }/>
        <AppHeader user={this.state.name} avatar={this.state.avatar} />
        <MainComponent user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession } skills={ this.state.skills } repos={this.state.repositories}/>
        <Footer /> 
      </React.Fragment>
    );
  }
}

export default App;
