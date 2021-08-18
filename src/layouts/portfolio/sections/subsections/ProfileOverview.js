import React from 'react';

function ProfileOverview(props){
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
        <div className='cols' style={{fontSize: "1.5rem", color: 'var(--light-text-color)'}}>
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
                        <span className="lg-60" style={ unitDataStyle }>{ props.profession }</span>
                    </div>
                </div>
                
                <h2 style={ headerStyle }>Career Objectives:</h2>
                <div>To use my wealth of skills and talents to better the lives of people</div>
                
                <h2 style={ headerStyle }>Education:</h2>
                <div className="cols education-container" style={{marginLeft: '0.5rem'}}>
                    <div className="cols">
                        <h4 style={{marginBottom: 0, marginTop: '1rem'}}>University of Lagos, Akoka Nigeria</h4>
                        <em>Tertiary Institution</em>
                        <span>Mechanical Engineering (B. Sc.)</span>
                        <span className="date">2015 - Present</span>
                    </div>

                    <div className="cols">
                        <h4 style={{marginBottom: 0}}>Solidrock Model College</h4>
                        <em>Secondary Institution</em>
                        <span className="date">2005 - 2015</span>
                    </div>
                    
                    <div className="cols">
                        <h4 style={{marginBottom: 0}}>Akesan Royal School</h4>
                        <em>Primary Institution</em>
                        <span className="date">2002 - 2006</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileOverview