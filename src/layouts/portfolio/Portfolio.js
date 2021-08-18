import React from "react";

import "./portfolio.css";
import "./skills.css";
import "./projects.css";

import AppContext from "../../context/AppContext";

import AppHeader from "../../components/header";
import PointerBox from "../../components/pointerbox";
import Preloader from "../../components/preloader";
import Footer from "../../components/footer";

import ProfileSummary from "./sections/ProfileSummary";
import ProfileBody from "./sections/ProfileBody";

// Import utilities
import AppUtils from "../../utils/AppUtils";

class Body extends React.Component {
  constructor(props) {
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
            this.setState({ isActive: 0, isActiveTab: "overview-container" });
          },
        },
        {
          img: "icofont-book-alt",
          name: "Skills & Knowledge",
          total: 4,
          handler: async (ev) => {
            this.setState({ isActive: 1, isActiveTab: "skills-container" });
            const skills = await AppUtils.fetchUserSkills("user");
            if (skills) {
              this.props.setHomeComponentState({ skills });
              this.setDataCount(skills.length, 1);
            }
          },
        },
        {
          img: "icofont-tasks-alt",
          name: "Projects",
          total: 4,
          handler: async (ev) => {
            this.setState({ isActive: 2, isActiveTab: "project-container" });
            const projects = await AppUtils.fetchUserProject("user");
            if (projects) {
              this.props.setHomeComponentState({ projects });
              this.setDataCount(projects.length, 2);
            }
          },
        },
        {
          img: "icofont-cube",
          name: "Contacts",
          total: null,
          handler: (ev) => {
            this.setState({ isActive: 3, isActiveTab: "contact-container" });
          },
        },
      ],
    };

    this.setDataCount = (count, navTabIndex) => {
      let newNavTab = this.state.navTabs.map((navTab, index)=> {
        if (index === navTabIndex) navTab.total = count;
        return navTab;
      });

      this.setState({navTabs: newNavTab});
    }
  }

  render() {
    // setInterval(() => {console.log(this.state)}, 3000);
    return (
      <main className="cols">
        <ProfileSummary mainState={this.state} mainProps={this.props} />
        <ProfileBody
          isActive={this.state.isActive}
          isActiveTab={this.state.isActiveTab}
          navTabs={this.state.navTabs}
        />
      </main>
    );
  }
}

class Portfolio extends React.Component {
    static contextType = AppContext;
    componentDidMount(){
        setTimeout(async () => {
            const user = await AppUtils.fetchUserProfile();
            if (user) {
                this.context.setAppState({
                    name: user.name,
                    avatar: user.avatar
                });

                this.context.setPortfolioState({
                    profession: user.profession,
                    bio: user.bio
                });
            }
        }, 3000)
    }

  render() {
    return (
        <React.Fragment>
          <Preloader
            user={this.context.name}
            avatar={this.context.avatar}
            profession={this.context.portfolio.profession}
            bio={this.context.portfolio.bio}
          />
          <AppHeader user={this.context.name} avatar={this.context.avatar} />
          <PointerBox />
          <Body setHomeComponentState={this.context.setPortfolioState} />
          <Footer />
        </React.Fragment>
    )
  }
}

export default Portfolio;
