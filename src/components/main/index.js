import './main.css';
import './skills.css';
import './projects.css';
import React from 'react';

function NavigationTab(props) {
    let tabClass = `rows nav-tab ${(props.isActive)? 'active' : ''}`;
    let tabIconClass = `icon hide-on-mobile ${props.image}`;
    let repoNoticeClass = `tab-notice ${(props.isActive)? '' : 'none'}`;

    return (
        <span className={tabClass} onClick={props.handler}>
            <span className={tabIconClass}></span>
            <span className="tab-name">{props.name}</span>
            <span id="repo-notice" className={repoNoticeClass}>{props.total}</span>
        </span>
    );    
}

function SkillItem(props){
    let skillLevel = (props.level)? `${Math.round((props.level/10) * 100)}` : '0';
    return (
        <div className='cols skill-item' style={{backgroundColor: props.bgColor}}>
            <h3>{props.name || "Skill name"}</h3>
            <div className="rows" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                <div style={{marginRight: '1rem'}}>Skill level:</div>
                <div className="progress" ><div className="progress-value" style={{width: skillLevel + '%'}}>{skillLevel + '%'}</div></div>
            </div>
        </div>
    );
}

function SkillCategory(props){
    let headerStyle = {
        marginTop: '2.5rem',
        marginBottom: '1.5rem',
        // borderLeft: "2px solid var(--tab-border-color)",
        fontSize: '1.9rem',
        fontWeight: 400,
        width: 'auto',
        display: 'inline-block',
        textTransform: 'capitalize',
        padding: '0',
        paddingLeft: '0.8rem',
        color: 'var(--text-color)'
    };
    return (
        <React.Fragment>
            <h2 style={ headerStyle }>{props.name}</h2>
            <div className="rows skill-wrapper">
                { props.skills.map((prop, index) => <SkillItem key={index} name={prop.name} bgColor={prop.bgColor} level={prop.level}/>)}
            </div>
        </React.Fragment>
    )
}

function OverviewChild(props){
    let headerStyle = {
        marginTop: '2.5rem',
        marginBottom: '0.5rem',
        borderLeft: "2px solid var(--tab-border-color)",
        fontSize: '1.9rem',
        fontWeight: 400,
        width: 'auto',
        display: 'inline-block',
        textTransform: 'capitalize',
        padding: '0',
        paddingLeft: '0.8rem',
        color: 'var(--text-color)'
    };

    let unitDataStyle = {padding: '0.5rem 1rem 0.5rem 0.2rem', textAlign: 'left'};

    let unitDataWrapperStyle = {
        fontSize: '1.4rem',
        maxWidth: '600px'
    };

    return (
        <div className='cols' style={{fontSize: "1.4rem", color: 'var(--light-text-color)'}}>
            <div style={{fontWeight: "300"}}>
                <h2 style={ headerStyle }>My Profile:</h2>
                <div className="cols">
                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Email Address:</span>
                        <span className="lg-60" style={ unitDataStyle }>ogunbanjotemiloluwa@gmail.com</span>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Mobile Number:</span>
                        <span className="lg-60" style={ unitDataStyle }>+2349059620514</span>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Nationality:</span>
                        <span className="lg-60" style={ unitDataStyle }>Nigerian</span>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Language Spoken:</span>
                        <span className="lg-60" style={ unitDataStyle }>English</span>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Current Job:</span>
                        <span className="lg-60" style={ unitDataStyle }>{props.profession}</span>
                    </div>
                </div>
                
                <h2 style={ headerStyle }>Career Objectives:</h2>
                <div>To use my wealth of skills and talents to better the lives of people</div>
                
                <h2 style={ headerStyle }>Education:</h2>
                <div className="cols education-container" style={{marginLeft: '0.5rem'}}>
                    <div className="cols">
                        <h4 style={{marginBottom: 0, marginTop: '1rem'}}>University of Lagos, Akoka Nigeria</h4>
                        <em>Tertiary Institution</em>
                        <span>(B. Sc.) Mechanical Engineering</span>
                        <b>2015 - Present</b>
                    </div>

                    <div className="cols">
                        <h4 style={{marginBottom: 0}}>Solidrock Model College</h4>
                        <em>Secondary Institution</em>
                        <b>2005 - 2015</b>
                    </div>
                    
                    <div className="cols">
                        <h4 style={{marginBottom: 0}}>Akesan Royal School</h4>
                        <em>Primary Institution</em>
                        <b>2002 - 2006</b>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProjectItem(props){
    return (
        <div className={`cols ${props.isDummy? 'dummy ': ''}project-item`}>
            <div className="cols left">
                <h3 className={`project-item-name ${props.isDummy? 'pad lazy-loading': ''}`}>{props.name}</h3>
                <span className={`project-item-source ${props.isDummy? 'pad lazy-loading': ''}`}>{props.type}</span>
                <div className={`project-item-description line-clamp line-clamp-5 ${props.isDummy? 'pad lazy-loading': ''}`}>{props.description}</div>
                <a href={props.link} target='blank' className={`project-star-btn rows ${props.isDummy? 'pad lazy-loading': ''}`}>
                    <i className="icofont-arrow-right"></i>
                    <span className='content'>Check it out</span>
                </a>
            </div>
            <img src={props.previewImg} alt="" className={`pad lazy-loading project-item-preview right`} />
        </div>
        // <div className={`cols ${props.isDummy? 'dummy ': ''}project-item`}>
        //     <div className="rows">
        //         <div className="lg-100 cols">
        //             <h3 className={`project-item-name ${props.isDummy? 'pad lazy-loading': ''}`}>{props.name}</h3>
        //             <span className={`project-item-source ${props.isDummy? 'pad lazy-loading': ''}`}>{props.source}</span>
        //             <div className={`project-item-description ${props.isDummy? 'pad lazy-loading': ''}`}>{props.description}</div>
        //         </div>

        //         <div className={`rows project-star-btn ${props.isDummy? 'pad lazy-loading': ''}`}></div>
        //     </div>
        //     <span className="rows project-item-details">
        //         <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
        //         <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
        //         <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
        //         <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
        //     </span>
        // </div>
    );
}

function ContactChild(props){
    let headerStyle = {
        marginTop: '2.5rem',
        marginBottom: '0.5rem',
        borderLeft: "2px solid var(--tab-border-color)",
        fontSize: '2rem',
        fontWeight: 400,
        width: 'auto',
        display: 'inline-block',
        textTransform: 'capitalize',
        padding: '0',
        paddingLeft: '0.8rem',
        color: 'var(--text-color)'
    };

    let unitDataStyle = {padding: '0.5rem 1rem 0.5rem 0.2rem', textAlign: 'left'};

    let unitDataWrapperStyle = {
        fontSize: '1.4rem',
        maxWidth: '600px'
    };

    return (
        <div className='cols' style={{fontSize: "1.4rem", color: 'var(--light-text-color)'}}>
            <div style={{fontWeight: "300"}}>
                <h2 style={ headerStyle }>My Social Media:</h2>
                <div className="cols">
                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-ui-press'></i> LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>Temiloluwa Ogunbanjo</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-brand-whatsapp'></i> Whatsapp:</span>
                        <a href="https://wa.me/+2349059620514?text=Hi" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+2349 05 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-ui-press'></i> Github:</span>
                        <a href="https://github.com/tehmi2000" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>https://github.com/tehmi2000</a>
                    </div>
                </div>
                
                <h2 style={ headerStyle }>Telephone:</h2>
                <div className="cols">
                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Mobile Number:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+2349 05 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>LinkedIn:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+2349 05 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>LinkedIn:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+2349 05 962 0514</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function createChildren(state, props) {
    if(state.isActive === 0) return <OverviewChild profession={props.profession}/>;
    if(state.isActive === 1) {
        let skCategory = {};

        // Sort each skill into their respective categories
        props.skills.forEach(skillset => {
            if(!skillset.category){

                if(skCategory['other']) skCategory['other'].push(skillset);
                else skCategory['other'] = [skillset];
            }else{

                if(skCategory[skillset.category]) skCategory[skillset.category].push(skillset);
                else skCategory[skillset.category] = [skillset];
            }
        });

        let returnedItem = [];
        Object.keys(skCategory).forEach(category => {
            returnedItem.push(<SkillCategory name={category} skills={skCategory[category]}/>);
        });

        return returnedItem;
    };
    if(state.isActive === 2) return props.repos.map((prop, index) => <ProjectItem key={index} name={prop.name} description={prop.description} isDummy={prop.isDummy} previewImg={prop.previewImg} link={prop.link}/>);
    if(state.isActive === 3) return <ContactChild />
}

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
                        // this.setState(prevState => {
                        //     let changedObject = {
                        //         navTabs: prevState.navTabs.map((eachObject, index) => {
                        //             return Object.assign({}, eachObject, {isActive: (index === 0)? true : false})
                        //         })
                        //     };
                        //     let newState = Object.assign({}, prevState, changedObject);
                        //     return newState;
                        // });
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
                    name: "Projects",
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
                <section className="cols user-profile-section">
                    <div className="hide-on-mobile" style={{position: 'absolute', borderBottom: '1px solid var(--separation-line-color)', width: '50%', marginTop: '3.1rem', left: 0, zIndex: -1}}></div>
                    
                    <div className="rows img-wrapper">
                        <img className="user-profile-picture" src={ this.props.avatar } alt="" width="120" height="120" />
                        <span className="username">{this.props.user}</span>
                    </div>

                    <div className="rows">
                        <button className="strip-btn user-status">
                            <i className="icofont-ui-love"></i>
                        </button>
                        <button className="strip-btn lg-100" style={{fontWeight: 500}}>Edit profile</button>
                    </div>
                    
                    <div className="user-details" style={{margin: '1.8rem 0 0', fontSize: '1.35rem'}}>{ this.props.bio }</div>
                </section>
    
                <section className="main-content-section">
                    <nav className="nav-tab-wrapper" style={{borderBottom: '1px solid var(--separation-line-color)', width: '100%', overflowX: 'auto'}}>
                        <div className="rows slider">
                            {/* Create Navigation Tabs */}
                            {this.state.navTabs.map((props, index) => <NavigationTab key={index} name={props.name} total={props.total} isActive={this.state.isActive === index} image={props.img} handler={props.handler}/>)}
                        </div>
                    </nav>

                    <div className="section-content">
                        <div className="section-content-controls">
                            <form action="">
                                <input type="text" className="repo-search-bar" placeholder="Find something..." />
                            </form>
                        </div>
                        <div id={ this.state.isActiveTab } className="cols">
                            {/* Create Selected Tab Content */}
                            {createChildren(this.state, this.props)}
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default MainComponent;