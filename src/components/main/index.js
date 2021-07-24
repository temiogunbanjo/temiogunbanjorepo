import './main.css';
import './skills.css';
import './projects.css';
import React from 'react';
import UserProfileSection from './sections/UserProfileSection';
import MainContentSection from './sections/MainContentSection';


class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: 0,
            isActiveTab: "overview-container",                     
            navTabs: [
                {
                    img: "icofont-book",
                    name: "Overview",
                    total: null,
                    handler: (ev) => {
                        this.setState({isActive: 0, isActiveTab: "overview-container"});
                    }
                }, {
                    img: "icofont-book-alt",
                    name: "Skills & Knowledge",
                    total: 14,
                    handler: (ev) => {
                        this.setState({isActive: 1, isActiveTab: "skills-container"})
                    }
                }, {
                    img: "icofont-tasks-alt",
                    name: "Projects & Experiences",
                    total: 4,
                    handler: (ev) => {
                        this.setState({isActive: 2, isActiveTab: "project-container"})
                    }
                }, {
                    img: "icofont-cube",
                    name: "Contacts",
                    total: null,
                    handler: (ev) => {
                        this.setState({isActive: 3, isActiveTab: "contact-container"})
                    }
                }
            ]
        }
    }

    componentDidMount(){
        let timeout = Math.round((Math.random() * 25) + 5);
        setTimeout(() => {
            // document.querySelector('main').
        }, timeout);
    }

    render(){
        // setInterval(() => {console.log(this.state)}, 3000);
        return(
            <main className="cols">
                <UserProfileSection mainState={this.state} mainProps={this.props}/>
                <MainContentSection mainState={this.state} mainProps={this.props}/>
            </main>
        );
    }
}

export default MainComponent;