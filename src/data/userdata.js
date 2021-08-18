import pic1 from '../resources/images/julian-schultz-JP_nc0jEakE-unsplash.jpg';
import nullimgT from '../resources/images/nullimgT.png';
import nullimg from '../resources/images/nullimg.png';
import deeplug from '../resources/images/DeePlug-Logo.png';


const colorList = ['#1e1e1e', "rgb(0, 82, 205)", 'orange', 'red', 'purple', 'orangered', 'crimson', 'brown'];
const color1 = colorList[0];
const color2 = colorList[3];
const color3 = colorList[4];

export const data = {
  name: "temiloluwa ogunbanjo",
  avatar: pic1,
  profession: "Fullstack Software Developer",
  bio: `I am a Fullstack Software Developer with ${new Date().getFullYear() - 2016} years experience using Javascript, Node.js, RESTful APIs, NoSQL Databases and RDBMS. I am also a part-time graphics designer, animator, and a final year student in the University of Lagos.`
};

export const skills = [
  {name: "NodeJS", bgColor: color3, level: 7, category: 'web development'},
  {name: "Javascript", bgColor: color3, level: 9, category: 'web development'},
  {name: "MySQL", bgColor: color3, level: 7, category: 'web development'},
  {name: "MongoDB", bgColor: color3, level: 6, category: 'web development'},
  {name: "REST API", bgColor: color3, level: 7, category: 'web development'},
  {name: "ReactJS", bgColor:  color3, level: 6, category: 'web development'},
  {name: "GraphQL", bgColor: color3, level: 3, category: 'web development'},
  {name: "AWS Services", bgColor: color3, level: 5, category: 'web development'},
  {name: "Figma", bgColor: color2, level: 5.9, category: 'graphics design'},
  {name: "Adobe Photoshop", bgColor: color2, level: 7.5, category: 'graphics design'},
  {name: "Adobe XD", bgColor: color2, level: 6, category: 'graphics design'},
  {name: "Autodesk AutoCAD", bgColor: color1, level: 7.8, category: 'machinery & designs'},
  {name: "Autodesk Inventor", bgColor: color1, level: 8, category: 'machinery & designs'},
  {name: "Welding & Fabrication", bgColor: color1, level: 5, category: 'machinery & designs'}
];

export const projects = [
  {
    name: 'TGuide',
    type: 'app',
    description: 'Tguide is a react app that serves as a virtual tour guide for travelers and tourists.',
    previewImg: deeplug,
    link: 'https://t-guide.herokuapp.com'
  },{
    name: 'Univers',
    type: 'ecommerce',
    description: 'An ecommerce platform for buying and selling all categories of products from household items to fashion items and many more.',
    previewImg: nullimg,
    link: 'https://oneunivers.herokuapp.com'
  }, {
    name: 'Teambod',
    type: 'Organization',
    description: 'Teambod was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
    previewImg: nullimgT,
    link: 'https://teambod.herokuapp.com'
  }, {
    name: 'Hitmee',
    type: 'Social Media',
    description: 'Teambod was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
    previewImg: nullimg,
    link: 'https://hitmee.herokuapp.com'
  }, {
    name: 'Game Project',
    type: 'Games',
    description: 'Game Project is a 2D game written in VanillaJS. The game consists of a player (plane) and opponent (plane). The player can change its color and can navigate using the keyboard keys.',
    previewImg: nullimg,
    link: 'https://hitmee.herokuapp.com'
  }
];