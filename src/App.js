// Import styles
import './App.css';
import './resources/styles/clamp.min.css';

// import react components
import React from 'react';
import PointerBox from './components/pointerbox';
import Preloader from './components/preloader';
import AppHeader from './components/header';
import MainComponent from './components/main';
import Footer from './components/footer';

// import other resources
import userpp from './resources/images/images (10).jpeg';
import pic1 from './resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg';
import pic2 from './resources/images/pexels-designecologist-1999463.jpg'
import nullimg from './resources/images/nullimgT.png';

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
      projects: [{isDummy: true}, {isDummy: true}]
    }
  }

  componentDidMount(){
    let colorList = ['#1e1e1e', "rgb(0, 82, 205)", 'orange', 'red', 'purple', 'orangered', 'crimson', 'brown'];
    let getRandomColor = () => colorList[Math.round(Math.random() * (colorList.length - 1))];
    let color1 = colorList[0];
    let color2 = colorList[3];
    let color3 = colorList[4];
    

    setTimeout(() => {
      this.setState((prevState) => {
        let changedState = {
          name: "temiloluwa ogunbanjo",
          avatar: pic1,
          profession: "Fullstack Web Developer",
          bio: `I am a Fullstack Software Developer with ${new Date().getFullYear() - 2016} years experience using Javascript, Node.js, RESTful APIs, NoSQL Databases and RDBMS. I am also a part-time graphics designer, animator, and a final year student in the University of Lagos.`,
          skills: [
            {name: "NodeJS", bgColor: color3, level: 7, category: 'web development'},
            {name: "Javascript", bgColor: color3, level: 9, category: 'web development'},
            {name: "MySQL", bgColor: color3, level: 7, category: 'web development'},
            {name: "MongoDB", bgColor: color3, level: 6, category: 'web development'},
            {name: "REST API", bgColor: color3, level: 6, category: 'web development'},
            {name: "ReactJS", bgColor:  color3, level: 6, category: 'web development'},
            {name: "GraphQL", bgColor: color3, level: 3, category: 'web development'},
            {name: "AWS Services", bgColor: color3, level: 5, category: 'web development'},
            {name: "Figma", bgColor: color2, level: 5.9, category: 'graphics design'},
            {name: "Adobe Photoshop", bgColor: color2, level: 7.5, category: 'graphics design'},
            {name: "Adobe XD", bgColor: color2, level: 6, category: 'graphics design'},
            {name: "Autodesk AutoCAD", bgColor: color1, level: 7.8, category: 'machinery & designs'},
            {name: "Autodesk Inventor", bgColor: color1, level: 8, category: 'machinery & designs'},
            {name: "Welding & Fabrication", bgColor: color1, level: 5, category: 'machinery & designs'}
          ],
          projects: [
            {
              name: 'Univers',
              type: 'ecommerce',
              description: 'An ecommerce platform for buying and selling all categories of products from household items to fashion items and many more.',
              previewImg: userpp,
              link: 'https://oneunivers.herokuapp.com'
            }, {
              name: 'Teambod',
              type: 'Organization',
              description: 'Teambod was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
              previewImg: pic1,
              link: 'https://teambod.herokuapp.com'
            }, {
              name: 'Hitmee',
              type: 'Social Media',
              description: 'Teambod was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
              previewImg: pic2,
              link: 'https://hitmee.herokuapp.com'
            }, {
              name: 'Game Project',
              type: 'Games',
              description: 'Game Project is a 2D game written in Javascript while employing HTML5 & CSS3. The game consists of a player (plane) and opponent (plane). The player can change its plane color and can navigate using the keyboard keys.',
              previewImg: userpp,
              link: 'https://hitmee.herokuapp.com'
            }
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
        <PointerBox />
        <Preloader user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession }/>
        <AppHeader user={this.state.name} avatar={this.state.avatar} />
        <MainComponent user={this.state.name} avatar={this.state.avatar} bio={this.state.bio} profession={ this.state.profession } skills={ this.state.skills } repos={this.state.projects}/>
        <Footer /> 
      </React.Fragment>
    );
  }
}

export default App;
