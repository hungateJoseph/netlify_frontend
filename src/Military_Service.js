import './App.css';
import React from 'react';
import StartPic from './startpic.png'
import EndPic from './endpic.JPG'

export default function Military_Service() {
    return (
        <>
        <div className='main-container'>
        <div className='about-container'>
        <img src={StartPic} className='pic1'/>
        <img src={EndPic} className='pic2'/>
        <p className='about'>
        As an Air Defense Artillery officer in the U.S. Army, I gained invaluable leadership, logistics, and operational management skills. 
        <br /><br />
        After graduating from Rice University in 2017, I commissioned through the U.S. Army's Officer Candidate School (OCS) - a program that allows
        civilians with college degrees to commission as Second Lieutenants. I chose to specialize in Air Defense Artillery through a strong interest in
        long-range radar capabilities and missile-interception technology.
        <br /><br />
        My first major assignment was in Suwon, South Korea, where I served as a platoon leader and Tactical Control Officer (TCO). This was a demanding
        role with a myriad of responsibilities, including monitoring for and intercepting Tactical Ballistic Missiles, commanding convoys across the 
        peninsula, and officiating live-fire ranges. (Picture here)
        <br /><br /> 
        I finished my military career in Fort Bliss, TX, where I served as a company executive officer and operations officer. This was a senior
        leadership role where, in addition to mentoring and supervising junior lieutenants, I served as a battalion finance officer and judicial investigative
        officer.
        <br /><br />
        </p>
        </div>
        </div>
        </>
    )

}