import React from 'react';

function Project(props){
    const { name, description, isDummy, previewImg, link } = JSON.parse(props.details);
    const classForDummyElements = isDummy? 'pad lazy-loading': '';
    return (
        <div className={ `cols ${ isDummy? 'dummy ' : '' }project-item` }>
            <div className="cols left">
                <h3 className={ `project-item-name ${ classForDummyElements }` }>{ name}</h3>
                <span className={ `project-item-source ${ classForDummyElements }`}>{ props.type }</span>
                <div className={`project-item-tags line-clamp line-clamp-1 ${ classForDummyElements }`}>Tags: React, Node.js, </div>
                <div className={`project-item-description line-clamp line-clamp-5 ${ classForDummyElements }`}>{ description }</div>
                <a href={ link } target='blank' className={`project-star-btn rows ${ classForDummyElements}`}>
                    <i className="icofont-arrow-right"></i>
                    <span className='content'>Check it out</span>
                </a>
            </div>
            <img src={ previewImg } alt="" className={ `${ classForDummyElements } project-item-preview right` } />
        </div>
    );
}

export default Project;

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