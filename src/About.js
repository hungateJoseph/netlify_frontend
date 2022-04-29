import './App.css';
import React from 'react';
import Military_Service from './Military_Service';
import LineGraph from 'react-line-graph'


export default function About() {
    return (
        <>

        <div className='main-container'>
        <div className='about-container'>
        <p className='about'>
        My name is <a className='emphasis'>Joseph Hungate</a> and I maintain this website as a record of my current and past projects, interests, and experiences. 
        <br /><br />
        I am particularly interested in machine learning and parallel algorithms, and how they can be used to find correlations in real-world data sets. I am currently working
        on a variety of projects to analyze data pulled from Twitter and the stock market, with a focus on political correlations. 
        <br /><br />
        I recently exited the U.S. Army, where I served as an Air Defense Artillery Officer for four years. See 
        the <a className='emphasis' onClick={() => {Military_Service()}}>Military Service</a> section   
        for more information on my duties and experiences in that role.
        <br /><br /> 
        I grew up in Portland, OR, earned a Bachelor's in Computer Science from Rice University, 
        and have lived and worked in Texas, Oklahoma, and South Korea. I am currently based in Portland, OR.
        <br /><br />
        <a href='https://www.linkedin.com/in/joseph-hungate-89061692/' target='blank' className='emphasis' style={{textDecoration:'underline'}}>LinkedIn</a>
        </p>
        </div>
        </div>
        </>
    )

}