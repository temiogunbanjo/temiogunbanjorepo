import React from 'react';
import NavigationBar from '../../navigationbar';
import ProfileOverview from '../subsections/ProfileOverview';
import Project from '../subsections/Project';
import SkillCategory from '../subsections/SkillCategory';
import ContactSection from '../subsections/ContactSection';

function formatSkills(skillset){
    const returnedItem = [];
    const skCategory = {};

    // Sort each skill into their respective categories
    skillset.forEach(skill => {
        if(!skill.category){

            if(skCategory['other']) skCategory['other'].push(skill);
            else skCategory['other'] = [skill];
        }else{

            if(skCategory[skill.category]) skCategory[skill.category].push(skill);
            else skCategory[skill.category] = [skill];
        }
    });

    Object.keys(skCategory).forEach(category => {
        returnedItem.push(<SkillCategory name={category} skills={skCategory[category]}/>);
    });

    return returnedItem;
}

function createSubSection(state, props) {
    switch(state.isActive){
        case 0:
            return <ProfileOverview profession={props.profession}/>;

        case 1:
            return formatSkills(props.skills);

        case 2:
            return props.repos.map((prop, index) => {
                return <Project key={ index } details={ JSON.stringify(prop) }/>
            });
    
        case 3:
            return <ContactSection />;

        default:
            return null;
    }
}

class MainContentSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { navTabs, isActive, isActiveTab } = this.props.mainState;
        return (
            <section className="main-content-section">
                <NavigationBar navTabs={ navTabs } isActive={ isActive }/>

                <div className="section-content">
                    <div className="section-content-controls">
                        <form action="">
                            <input type="text" className="repo-search-bar" placeholder="Find something..." />
                        </form>
                    </div>
                    <div id={ isActiveTab } className="cols">
                        {/* Create Selected Tab Content */}
                        { createSubSection(this.props.mainState, this.props.mainProps) }
                    </div>
                </div>
            </section>
        )
    }
    
}

export default MainContentSection;