import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Subtitle from "../components/Subtitle/Subtitle";
function Home() {
    return (
        <div className="Home">
        <img className="hero" src={require('../assets/images/hero.jpg')} alt="Two ladies looking up with their eyes closed"/>
        <h3 className="hero-text">Celebrating the beauty of women, one strand at a time.
        <Link className="cta-link" to='/services'>Our Services</Link>
        </h3>
        <Subtitle title='Featured Styles'/>
        <section className="card">
            <img className="card-img" src={require ('../assets/images/braidedpony.jpg')}/>
            <h4>text</h4>
        </section>
        </div>
    )
}

export default Home