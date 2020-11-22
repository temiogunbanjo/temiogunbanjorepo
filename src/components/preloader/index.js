import './preloader.css';
import React from 'react';

class Preloader extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    componentDidMount(){
        document.addEventListener("DOMContentLoaded", () => {
            const gsap = window.gsap || null;
            console.log(gsap);

            if (gsap) gsap.fromTo(document.querySelectorAll(".preloader .preload-body *"), 2, {opacity: 0}, {opacity: 1, stagger: 0.2});
        });

        window.onload = (ev) => {
            const gsap = window.gsap || null;
            console.log(gsap);

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
            
        }
    }

    render(){
        return(
            <div className="preloader">
                <div className="gates left-gate"></div>
                <div className="gates right-gate"></div>
                <div className="cols preload-body">
                    <span className="img-pseudo"><img className="user-profile-picture" src={ this.props.avatar } alt="" width="120" height="120" /></span>
                    <div className="cols user-body-content" style={{fontSize: "1.3rem", fontWeight: 300, minWidth: "40%"}}>
                        <div className="username">{ this.props.user }</div>
                        <div className="profession" style={{color: "#aaa"}}>{ this.props.profession }</div>
                        <div className="bio" style={{marginTop: "1.8rem", lineHeight: 1.5}}>{ this.props.bio }</div>
                        <button className="strip-btn" style={{color: "white"}}>View profile</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;