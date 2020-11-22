import './main.css';
import nullimg from '../../resources/nullimg.png';
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

function RepoItem(props){

    return (
        <div className={`cols ${props.isDummy? 'dummy ': ''}repo-item`}>
            <div className="rows">
                <div className="lg-100 cols">
                    <h3 className={`repo-item-name ${props.isDummy? 'pad lazy-loading': ''}`}>{props.name}</h3>
                    <span className={`repo-item-source ${props.isDummy? 'pad lazy-loading': ''}`}>{props.source}</span>
                    <div className={`repo-item-description ${props.isDummy? 'pad lazy-loading': ''}`}>{props.description}</div>
                </div>

                <div className={`rows repo-star-btn ${props.isDummy? 'pad lazy-loading': ''}`}></div>
            </div>
            <span className="rows repo-item-details">
                <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
                <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
                <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
                <span className="rows detail-item"><i className="icon circle lazy-loading"></i><span className="pad lazy-loading"></span></span>
            </span>
        </div>
    );
}

class MainComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isActive: 0,
            isActiveTab: null,
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
                        this.setState({isActive: 0})
                    }
                }, {
                    img: "icofont-book-alt",
                    name: "Skills & Achievements",
                    total: 0,
                    handler: (ev) => {
                        this.setState({isActive: 1})
                    }
                }, {
                    img: "icofont-tasks-alt",
                    name: "Projects",
                    total: 0,
                    handler: (ev) => {
                        this.setState({isActive: 2})
                    }
                }, {
                    img: "icofont-cube",
                    name: "Contacts",
                    total: 0,
                    handler: (ev) => {
                        this.setState({isActive: 3})
                    }
                }
            ]
        }
    }

    render(){
        // setInterval(() => {console.log(this.state)}, 3000);
        return(
            <main className="cols">
                <div className="cols user-profile-section">
                    <div className="hide-on-mobile" style={{position: 'absolute', borderBottom: '1px solid var(--separation-line-color)', width: '50%', marginTop: '3.1rem', left: 0, zIndex: -1}}></div>
                    
                    <div className="rows img-wrapper">
                        <img className="user-profile-picture" src={ this.props.avatar } alt="" width="120" height="120" />
                        <span className="username">{this.props.user}</span>
                    </div>
    
                    <button className="strip-btn user-status"><i className="icofont-ui-love"></i> <span className="show-on-mobile" style={{fontSize: '1.2rem', marginLeft: '0.5rem'}}>Tap to like</span> </button>
                    <button className="strip-btn" style={{fontWeight: 500}}>Edit profile</button>
    
                    <div className="user-details line-clamp line-clamp-4" style={{margin: '1.8rem 0 0', fontSize: '1.35rem'}}>{ this.props.bio }</div>
                </div>
    
                <div className="repository-section">
                    <nav className="nav-tab-wrapper" style={{borderBottom: '1px solid var(--separation-line-color)', width: '100%', overflowX: 'auto'}}>
                        <div className="rows slider">
    
                            {/* Create Navigation Tabs */}
                            {this.state.navTabs.map((props, index) => {
                                return <NavigationTab key={index} name={props.name} total={props.total} isActive={this.state.isActive === index} image={props.img} handler={props.handler}/>
                            })}
    
                        </div>
                    </nav>
                    <div className="section-content">
                        <div className="section-content-controls">
                            <form action="">
                                <input type="text" className="repo-search-bar" placeholder="Find a repository..." />
                            </form>
                        </div>
                        <div id="repository-container">
                            {/* Create Repository Items */}
                            {this.props.repos.map((props, index) => {
                                return <RepoItem key={index} name={props.name} total={props.total} isDummy={props.isDummy} image={props.img}/>
                            })}
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default MainComponent;