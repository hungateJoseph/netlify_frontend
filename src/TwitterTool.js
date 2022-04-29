import './App.css';
import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2'
import BarChart from './DrawGraph.js'
import {Chart as ChartJS} from 'chart.js/auto'
import DrawGraph from './DrawGraph.js';
import About from './About'
import ClickCountButton2 from './DrawGraph.js';


export default function TwitterTool() {

    const [data1, setData] = useState({"labels" : ["Democrats", "Republicans"], "averages" : [0.432, 0.211], "state" : [""]});
    console.log("hello")

    // useEffect(() => {
    //     console.log("fetch attempted")
    //     fetch("/members").then(
    //         res => res.json()
    //     ).then(
    //         data => {
    //             console.log("first data val", data)
    //             setData(data)
                
    //         }
    //     )
    // }, [])

    console.log("reached func with", data1)
    return (
        
        ClickCountButton2(data1)
    )
    
}