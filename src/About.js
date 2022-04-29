import './App.css';
import React from 'react';
import Military_Service from './Military_Service';
import LineGraph from 'react-line-graph'


export default function About() {
    // const line_data = [[1, 2], [2, 3], [3, 4]]
    return (
        <>
        {/* <LineGraph
                    // data = {line_data}
                /> */}
        <div className='main-container'>
        <div className='about-container'>
        <p className='about'>
        My name is <a className='emphasis'>Joseph Hungate</a> and I maintain this website as a record of my current and past projects, interests, and experience. 
        <br /><br />
        I am particularly interested in <a className='emphasis'>educational technology and design</a>, 
        and want to build <a className='emphasis'>new solutions to help bridge continuing gaps in skill-based learning and job education</a>.  
        As a full-time MBA candidate at <a className='emphasis'>UC Berkeley Haas</a>, I am focused on marketing, analytics, and human-centered design.
        <br /><br />
        I recently exited the U.S. Army, where I served as an Air Defense Artillery Officer for four years. See 
        the <a className='emphasis' onClick={() => {Military_Service()}}>Military Service</a> section   
        for more information on my duties and experiences in that role.
        <br /><br /> 
        I grew up in Portland, OR, earned a Bachelor's in Computer Science from Rice University, 
        and have lived and worked in Los Angeles, Princeton, and Philadelphia. I am currently based in Portland, OR.
        <br /><br />
        <a href='https://www.linkedin.com/in/joseph-hungate-89061692/' target='blank' className='emphasis' style={{textDecoration:'underline'}}>LinkedIn</a>
        </p>
        </div>
        </div>
        </>
    )

}