import React from 'react';

function NavigationTab(props) {
    let tabClass = `rows nav-tab ${(props.isActive)? 'active' : ''}`;
    let tabIconClass = `icon hide-on-mobile ${props.icon}`;
    let repoNoticeClass = `tab-notice ${(props.isActive)? '' : 'none'}`;

    return (
        <span className={ tabClass } onClick={ props.handler }>
            <span className={ tabIconClass }></span>
            <span className="tab-name">{ props.name }</span>
            <span id="repo-notice" className={ repoNoticeClass }>{ props.total }</span>
        </span>
    );    
}

function NavigationBar(props){
    return (
        <nav className="nav-tab-wrapper" style={{borderBottom: '1px solid var(--separation-line-color)', width: '100%', overflowX: 'auto'}}>
            <div className="rows slider">
                {/* Create Navigation Tabs */}
                {
                    props.navTabs.map((aProp, index) => {
                        return <NavigationTab key={ index } name={ aProp.name } total={ aProp.total } isActive={ props.isActive === index} icon={aProp.img} handler={aProp.handler}/>
                    })
                }
            </div>
        </nav>
    )
}

export default NavigationBar;