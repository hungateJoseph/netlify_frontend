import './App.css';
import React from 'react';
import {Navigate, Outlet} from 'react-router-dom'



export default function ProjectOverview() {

    return (
        <>
        <div className='main-container'>
        <div className='about-container'>
        <h3>Inspiration</h3>
        <p className='about'>
        
        During his presidency, Donald Trump was such a prolific Tweeter that tools were developed to alert companies when he tweeted 
        about their stock. Now, out of the 535 sitting Members of the U.S. Congress, only five have inactive Twitter accounts. What correlations can be drawn between
        their tweets and political activities or events throughout the country? The <a className='emphasis'>Political Tweet Tool</a> aims to analyze the behavior of politicians' tweets and see
        what conclusions can be drawn.
        <br /><br />
        <h2>Development</h2>
        This project is written with a Python back-end and utilizes the Flask framework to port results to a React JS front-end. Data processing was facilitated
        by the use of the Tweepy API and MySQL package. As a web-hosted project, only twenty tweets are gathered per congressman/congresswoman in any given day range. This is to reduce loading times
        for the end user. Larger data sets can be implemented with a direct download of this project from my <a className='emphasis' href='https://github.com/hungateJoseph'>Github</a>.
        <br /><br />
        
        The resulting dataset contains over 10,000 tweets for any selected date range,
        which can be further filtered by name, district, state, party, time in office, retweet status, etc.
        <br /><br />
        <h2>Sentiment Analysis</h2>
        I used the <a className='emphasis' href='https://www.nltk.org/_modules/nltk/sentiment/vader.html' target='blank'>VADER (Valence Aware Dictionary and sEntiment Reasoner)</a> analysis tool to establish a baseline sentiment rating for each tweet. Although
        robust in nature, the VADER lexicon lacked certain key features necessary for an authentic tweet analysis. 
        <br /><br />
        First, each tweet was cleaned to remove
        superfluous text such as links and images. Next, I updated the VADER lexicon to include emojis and "@TwitterHandle" references. For example,
        in the tweet "When is @JosephHungate123 going to take responsibility for the ugly state of this website?" it's necessary for VADER to know
        that "@JosephHungate123" is a person that the tweeter is assigning blame to.
        <br /><br />
        VADER generates a sentiment score between -1 and 1 for any given tweet, with -1 indicating an extremely negative sentiment, and 1 indicating
        an extremely positive sentiment. 
        <br /><br />
        <h2>Results</h2>
        This tool is designed for robust customization, ease-of-use, and future data integration. As a preliminary conclusion, however, the default data displayed
        indicates that the average Democrat's tweet is more than twice as positive as the average Republican's.
        <br /><br />
        <br /><br />
        <br /><br />
        </p>
        </div>
        </div>
        </>
    )

}