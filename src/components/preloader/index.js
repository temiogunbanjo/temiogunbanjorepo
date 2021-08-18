import './preloader.css';
import React from 'react';

class Preloader extends React.Component {
    componentDidMount(){
        const gsap = window.gsap || null;
        // console.log(gsap);

        document.querySelector(".preloader .preload-body button").addEventListener("click", function(ev){
            let leftPreloaderGate = document.querySelector(".preloader .gates.left-gate");
            let rightPreloaderGate = document.querySelector(".preloader .gates.right-gate");
            const animationDelay = 0;
            const animationTime = 1;
            
            if (gsap) {
                let timeline = new gsap.timeline();
                timeline.add(gsap.to(leftPreloaderGate, 0.5, {left: "-55vw", skewX: '5px', delay: animationDelay}))
                        .add(gsap.to(rightPreloaderGate, 0.5, {left: "105vw", skewX: '-5px', delay: 0}))
                        .add(gsap.set(leftPreloaderGate.parentElement, {display: "none"}));
            } else {
                console.log("using alternative...")
                document.querySelectorAll(".preloader .gates").forEach(gate => {
                    gate.classList.add("open");
                    setTimeout(() => {
                        leftPreloaderGate.parentElement.style.display = 'none';
                    }, (animationDelay + animationTime) * 1000);
                });
            }
        });

        if (gsap) {
            let startTimeline = new gsap.timeline();
            let animation1 = gsap.fromTo(document.querySelector(".preloader h2"), 1, {opacity: 0}, {opacity: 1, delay: 0.5, onComplete: ev => {
                gsap.to(document.querySelector(".preloader h2"), 1, {opacity: "0", delay: 0.5});
            }});
            let animation2 = gsap.fromTo(document.querySelectorAll(".preloader .preload-body *"), 2, {opacity: 0}, {opacity: 1, stagger: 0.2, delay: 1.8});
            
            startTimeline.add(animation1).add(animation2);
        }
    }

    render(){
        return(
            <div className="preloader">
                <div className="gates left-gate"></div>
                <div className="gates right-gate"></div>
                <h2 style={{opacity: "0", position: "absolute", fontSize: "5vw", fontWeight: "400", left: "50%", top: "40%", transform: "translate(-50%, -50%)"}}>Hi there!</h2>
                <div className="cols preload-body">
                    <span className="img-pseudo"><img className="user-profile-picture" src={ this.props.avatar } alt="" width="120" height="120" /></span>
                    <div className="cols user-body-content" style={{fontSize: "1.25rem", fontWeight: 300, minWidth: "40%"}}>
                        <div className="username">{ this.props.user }</div>
                        <div className="profession" style={{color: "#aaa"}}>{ this.props.profession }</div>
                        <div className="bio line-clamp line-clamp-4" style={{marginTop: "1.8rem", lineHeight: 1.8}}>{ this.props.bio }</div>
                        <button className="strip-btn" style={{color: "white"}}>View More</button>
                        <span className="" style={{color: "#888", marginTop: "1rem", fontWeight: 500}}>Fun Tips: Tap the 'Love emoji' button on the profile to like this profile.</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;