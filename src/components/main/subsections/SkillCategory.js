import React from 'react';

function SkillItem(props){
    let skillLevel = (props.level)? `${Math.round((props.level/10) * 100)}` : '0';
    return (
        <div className='cols skill-item' style={{backgroundColor: props.bgColor}}>
            <h3>{ props.name || "Skill name" }</h3>
            <div className="rows" style={{alignItems: 'center', flexWrap: 'wrap'}}>
                <div style={{marginRight: '1rem'}}>Skill level:</div>
                <div className="progress" ><div className="progress-value" style={{width: skillLevel + '%'}}>{ skillLevel + '%' }</div></div>
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
                { 
                    props.skills.map((prop, index) => {
                        return <SkillItem key={index} name={prop.name} bgColor={prop.bgColor} level={prop.level}/>
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default SkillCategory