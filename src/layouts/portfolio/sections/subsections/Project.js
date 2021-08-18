import React, { useEffect } from "react";
// import * as VanillaTilt from "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.1/vanilla-tilt.min.js";

function Project(props) {
  useEffect(() => {
    window.VanillaTilt.init(document.querySelectorAll(".project-item"), {
      max: 20,
      reverse: true,
      speed: 400,
      glare: true,
      "max-glare": 0.3
    });
  });

  const { name, description, isDummy, previewImg, link } = props.details;
  const classForDummyElements = isDummy ? "pad lazy-loading" : "";

  return (
    <div
      className={`cols ${isDummy ? "dummy" : ""} project-item`}
    //   data-tilt
    //   data-tilt-max="25"
    //   data-tilt-speed="400"
    //   data-tilt-glare="true"
    >
      <div
        style={
          {
            backgroundImage: `url(${previewImg})`,
            backgroundSize: '190px',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }
        }
        className={`${classForDummyElements} project-item-preview top`}
      ></div>
      <div className="cols bottom">
        <h3 className={`project-item-name ${classForDummyElements}`}>{name}</h3>
        <span className={`project-item-source ${classForDummyElements}`}>
          {props.type}
        </span>
        <div
          className={`project-item-tags line-clamp line-clamp-1 ${classForDummyElements}`}
        >
          Tags: React, Node.js
        </div>
        <div
          className={`project-item-description line-clamp line-clamp-5 ${classForDummyElements}`}
        >
          {description}
        </div>
        <a
          href={(link)? link : '#'}
          target="blank"
          className={`project-star-btn rows ${classForDummyElements}`}
          disabled={true}
          data-disabled={(link)? false : true}
        >
          <span className="content">{(link)? "view project" : "coming soon..."}</span>
          <i className="icofont-caret-right"></i>
        </a>
      </div>
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
