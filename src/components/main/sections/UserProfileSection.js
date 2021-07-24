import React from 'react';

class UserProfileSection extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        const { mainProps } = this.props;
        return (
            <section className="cols user-profile-section">
                <div className="hide-on-mobile" style={{position: 'absolute', borderBottom: '1px solid var(--separation-line-color)', width: '50%', marginTop: '3.1rem', left: 0, zIndex: -1}}></div>
                
                <div className="rows img-wrapper">
                    <img className="user-profile-picture" src={ mainProps.avatar } alt="" width="120" height="120" />
                    <span className="username">{ mainProps.user }</span>
                </div>

                <div className="rows">
                    <button className="strip-btn user-status">
                        <i className="icofont-ui-love"></i>
                    </button>
                    <button className="strip-btn lg-100" style={{fontWeight: 500}}>Edit profile</button>
                </div>
                
                <div className="user-details" style={{margin: '1.8rem 0 0', fontSize: '1.35rem'}}>{ mainProps.bio }</div>
            </section>
        )
    }
    
}

export default UserProfileSection