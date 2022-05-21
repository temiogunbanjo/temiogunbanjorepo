import avatar from '../resources/images/avatar.jpg';
import nullimgT from '../resources/images/nullimgT.png';
import univers from '../resources/images/logo-2.png';
import deeplug from '../resources/images/DeePlug-Logo.png';
import workman from '../resources/images/workmanlogomain.png';


const colorList = ['#2c2c2c', "#0052cd", 'orange', '#ee0000', 'purple', 'orangered', 'crimson', 'brown'];
const color1 = colorList[0];
const color2 = colorList[3];
const color3 = colorList[4];
const color4 = colorList[1];

export const data = {
  name: "temiloluwa ogunbanjo",
  avatar,
  profession: "Fullstack Software Developer",
  bio: `I am a Fullstack Software Developer with ${new Date().getFullYear() - 2017} years of professional experience using M.E.R.N. (MongoDB, Express, ReactJS, NodeJS) stack, building RESTful APIs, managing various databases (NoSQL, ORM, Amazon RDS, and RDBMS) and building modern and scalable frontend solutions. I am also a part-time graphics designer, animator, and finally, a recent graduate of the University of Lagos.`
};

export const skills = [
  {name: "NodeJS", bgColor: color3, level: 8.9, category: 'web development'},
  {name: "Javascript (JS)", bgColor: color3, level: 9, category: 'web development'},
  {name: "Typescript (TS)", bgColor: color3, level: 5, category: 'web development'},
  {name: "MySQL", bgColor: color3, level: 8, category: 'web development'},
  {name: "MongoDB", bgColor: color3, level: 5, category: 'web development'},
  {name: "REST API", bgColor: color3, level: 9, category: 'web development'},
  {name: "ReactJS", bgColor:  color3, level: 7, category: 'web development'},
  {name: "GraphQL", bgColor: color3, level: 3, category: 'web development'},
  {name: "AWS Services", bgColor: color3, level: 5, category: 'web development'},
  {name: "Autodesk AutoCAD", bgColor: color1, level: 7.4, category: 'machinery & designs'},
  {name: "Autodesk Inventor", bgColor: color1, level: 8, category: 'machinery & designs'},
  {name: "Welding & Fabrication", bgColor: color1, level: 5, category: 'machinery & designs'},
  {name: "Figma", bgColor: color2, level: 5.9, category: 'graphics design'},
  {name: "Adobe Photoshop", bgColor: color2, level: 8.5, category: 'graphics design'},
  {name: "Adobe XD", bgColor: color2, level: 5.5, category: 'graphics design'},
  {name: "Blender", bgColor: color4, level: 6, category: 'Animations & Motion Graphics'},
];

export const projects = [
  {
    name: 'T-Guide',
    type: 'Business',
    description: 'T-Guide is a react app that serves as a virtual tour guide for travelers and tourists.',
    previewImg: deeplug,
    link: 'https://t-guide.herokuapp.com'
  },{
    name: 'Univers',
    type: 'e-Commerce',
    description: 'An ecommerce platform for buying and selling all categories of products from household items to fashion items and many more.',
    previewImg: univers,
    link: 'https://oneunivers.herokuapp.com'
  }, {
    name: 'Hitmee',
    type: 'Instant Messaging',
    description: 'Teambod was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
    previewImg: nullimgT,
    link: 'https://hitmee.herokuapp.com'
  }, {
    name: 'Game Project',
    type: 'Games',
    description: 'Game Project is a 2D game written in VanillaJS. The game consists of a player (plane) and opponent (plane). The player can change its color and can navigate using the keyboard keys.',
    previewImg: nullimgT,
    link: 'https://hitmee.herokuapp.com'
  }, {
    name: 'Workman',
    type: 'Business',
    description: 'Workman was designed to make team assignment easier. The app allows companies divide big projects among several teams and members.',
    previewImg: workman,
    link: null
  }
];