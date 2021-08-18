import React from 'react';

function ContactSection(props){
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
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-linkedin'></i> LinkedIn:</span>
                        <a href="https://www.linkedin.com/in/temiloluwa-ogunbanjo-719731168" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>Temiloluwa Ogunbanjo</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-brand-whatsapp'></i> Whatsapp:</span>
                        <a href="https://wa.me/+2349059620514?text=Hi" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+234 905 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-instagram'></i> Instagram:</span>
                        <a href="https://instagram.com/+2349059620514?text=Hi" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+234 905 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }><i className='icon icofont-github'></i> Github:</span>
                        <a href="https://github.com/tehmi2000" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>https://github.com/tehmi2000</a>
                    </div>
                </div>
                
                <h2 style={ headerStyle }>Telephone:</h2>
                <div className="cols">
                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Mobile Number:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+234 905 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>Skype:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+234 905 962 0514</a>
                    </div>

                    <div className="rows" style={ unitDataWrapperStyle }>
                        <span className="lg-35" style={ unitDataStyle }>LinkedIn:</span>
                        <a href="tel:+2349059620514" className="lg-60" style={ {...unitDataStyle, color: 'var(--page-link-color)'} }>+234 905 962 0514</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;