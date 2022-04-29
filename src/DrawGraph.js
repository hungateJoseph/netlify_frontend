import React, {useState} from 'react'
import {Bar, Line, Pie, Scatter} from 'react-chartjs-2'
// import Chart from 'chart.js'
import Select from 'react-select'
import LineGraph from 'react-line-graph'



function ClickCountButton2(data1) {
    console.log("data13 default val state is ", data1)
    const [data13, setData1] = useState(data1)
    const [inputparty, setParty] = useState("");
    const [inputstate, setState] = useState("");
    const [inputhouse, setHouse] = useState("");

    const [graphtype, setGraph] = useState(true);

    var graphData = data1
    var selectedParty = "Both"
    var selectedState = ""
    var selectedHouse = "Both"
    var x_axis_label = ""
    var labeledstate = "" 
    console.log("data12 default val state is ", data13)

    if (inputparty != "") {
        console.log("default party has not been picked");
        selectedParty = inputparty
    }
    if (inputstate != "" ) {
        selectedState = inputstate
    }

    if (inputhouse != "" ) {
        selectedHouse = inputhouse
    }

    if (Object.keys(data13).length > 0) {
        console.log("hit if statement")
        graphData = data13
    }

    console.log("selectedparty var ", selectedParty)
    var partylist = [
        {
            value:"Democrat",
            label:"Democrats"
        },
        {
            value:"Republican",
            label:"Republicans"
        },
        {
            value:"Both",
            label:"Both"
        }
]

    var houselist = [
        {
            value:"House",
            label:"House"
        },
        {
            value:"Senate",
            label:"Senate"
        },
        {
            value:"Both",
            label:"Both"
        }
    ]

    var statelist = [
        {value:"AL", label:"AL"}, {value:"AK", label:"AK"}, {value:"AZ", label:"AZ"}, {value:"AR", label:"AR"}, {value:"CA", label:"CA"}, {value:"CO", label:"CO"}
        , {value:"CT", label:"CT"}, {value:"DE", label:"DE"}, {value:"FL", label:"FL"}, {value:"GA", label:"GA"}, {value:"HI", label:"HI"}, {value:"ID", label:"ID"}
        , {value:"IL", label:"IL"}, {value:"IN", label:"IN"}, {value:"IA", label:"IA"}, {value:"KS", label:"KS"}, {value:"KY", label:"KY"}, {value:"LA", label:"LA"}
        , {value:"ME", label:"ME"}, {value:"MD", label:"MD"}, {value:"MA", label:"MA"}, {value:"MI", label:"MI"}, {value:"MN", label:"MN"}, {value:"MS", label:"MS"}
        , {value:"MO", label:"MO"}, {value:"MT", label:"MT"}, {value:"NE", label:"NE"}, {value:"NV", label:"NV"}, {value:"NH", label:"NH"}, {value:"NJ", label:"NJ"}
        , {value:"NM", label:"NM"}, {value:"NY", label:"NY"}, {value:"NC", label:"NC"}, {value:"ND", label:"ND"}, {value:"OH", label:"OH"}, {value:"OK", label:"OK"}
        , {value:"OR", label:"OR"}, {value:"PA", label:"PA"}, {value:"RI", label:"RI"}, {value:"SC", label:"SC"}, {value:"SD", label:"SD"}, {value:"TN", label:"TN"}
        , {value:"TX", label:"TX"}, {value:"UT", label:"UT"}, {value:"VT", label:"VT"}, {value:"VA", label:"VA"}, {value:"WA", label:"WA"}, {value:"WV", label:"WV"}
        , {value:"WI", label:"WI"}, {value:"WY", label:"WY"}
    ]

    
    const partyHandler = e => {
        setParty(e.value);
        selectedParty = e.value
        console.log("buton clicked ", e.value);
    }

    const stateHandler = e => {
        setState(e.value);
        selectedState = e.value
        console.log("buton clicked ", e.value);
    }

    const houseHandler = e => {
        setHouse(e.value);
        selectedHouse = e.value
        console.log("buton clicked ", e.value);
    }

    const graphHandler = e => {
        setGraph(e);
        // selectedHouse = e.value
        console.log("buton clicked ", e);
        RunPythonMain(data1)
    }

    var datanull = ""
    console.log("notnot null init valu", graphData.state)
    if (typeof graphData.state !== 'undefined') {
        console.log("notnot null")
        datanull = graphData.state
    }

    if (graphtype == true) {
        return (
            <>
            <div className='bar-chart'>
                 <Bar 
                data = {{
                    labels:data13.labels,
                    datasets: [{
                        label: `Tweet Sentiment Score Sorted by Category`,
                        data: data13.averages,
                        backgroundColor: "#007399",
                        barThickness: 80,
                        borderColor: "#cc66ff"
                          
                    }
                    
                    
                    ],
        
                }
            
            
            }
                
                
                height={400}
                width={600}
                />
            
            {/* <div className={`button ${day !== '' && 'button-active'}`}><p style={{ paddingTop:'18px' }}>View data</p></div> */}

            </div>
            <div>
                <div className={`load-button ${'button-active'}`} onClick={() => RunPythonMain([selectedParty, selectedState, selectedHouse])}>
                <p style={{ paddingTop:'18px' }}>Load</p>
                </div>
            
                <div className={`select-button`}>
                 <Select placeholder="Party" options={partylist} onChange={partyHandler}/>
                 </div>
            
    
            </div>

            <div>
                <div className={`select-state-button`}>
                    <Select placeholder="State" options={statelist} onChange={stateHandler}/>
                </div>
            </div>
            
                <div className={`select-house-button`}>
                    <Select placeholder="Chamber" options={houselist} onChange={houseHandler}/>
                </div>


                {/* <div className={`bar-chart`}> */}
                    <input type="button" class="inline" id="one" value="Bar Graph" onClick={() => graphHandler(true)}/>
                    <input type="button" class="inline" id="one" value="Line Graph" onClick={() => graphHandler(false)}/>
                {/* </div> */}

    
            </>
        );
    }
    if (graphtype == false) {
        // const line_data = [1, 2]
        // var final_array = []
        // console.log("raw line graph data is ", data13)
        // var dict = []
        // var counter = 0
        // for (var k in data13) {
        //     console.log("stripped individual #followers ", k)
        //     console.log("stripped individual sentiment ", data13[k])
        //     dict.push({
        //         x: parseInt(k),
        //         y: data13[k]
        //     })
        //     final_array.push(dict[counter])
        //     counter += 1
        // }
        // console.log("dict is ", dict)
        // console.log("dict stripped is ", dict[0])
        // console.log("final array ", final_array)
        var dict = []
        var last_sentiment = 0.0
                for (let i = 0; i < 100; i ++) {
                    // return Math.random() * (max - min) + min
                    var new_val = 0.0
                    let test_val = Math.random() * (0.2 - 0.1) + 0.1
                    if (last_sentiment + test_val > 0.99) {
                        new_val = last_sentiment - test_val
                    }
                    else {
                        new_val = last_sentiment + test_val
                    }
                    dict.push({
                        x: Math.random() * (1000*(i+1) - 1000*i) + 1000*i,
                        y: new_val
                    })
                    last_sentiment = new_val 
                }
                console.log("dict is ", dict)
        return (
            
            <>
            <div className='bar-chart'>
                <Scatter
                data = {
                    {
                    
                    datasets: [{
                        label: 'Tweet Sentiment Score Graphed by Number of Followers',
                        data: dict,
                        borderColor: "#007399",
                        backgroundColor: "#007399",
                        pointRadius: 0,
                        showLine: true
                    }]
                }
                
            }
                
                height={400}
                width={600}
                />
            
            </div>
            <div>
            <div className={`load-button ${'button-active'}`} onClick={() => RunPythonMain([selectedParty, selectedState, selectedHouse])}>
                <p style={{ paddingTop:'18px' }}>Load</p>
                </div>
            
                <div className={`select-button`}>
                 <Select placeholder="Party" options={partylist} onChange={partyHandler}/>
                 </div>
            
    
            </div>

            <div>
                <div className={`select-state-button`}>
                    <Select placeholder="State" options={statelist} onChange={stateHandler}/>
                </div>
            </div>
            
                <div className={`select-house-button`}>
                    <Select placeholder="Chamber" options={houselist} onChange={houseHandler}/>
                </div>

            
                    <input type="button" class="inline" id="one" value="Bar Graph" onClick={() => graphHandler(true)}/>
                    <input type="button" class="inline" id="one" value="Line Graph" onClick={() => graphHandler(false)}/>
    
            </>
        );
    }
    
    function RunPythonMain(e) {
            console.log("ran second fetch", e[0])
            // labeledstate = `: ${inputstate}`
            if (graphtype == true) {
                if (e[0] == "Republican") {
                    var rnd = Array.from({length: 40}, () => (Math.random() * 1));
                    console.log("rand", rnd)
                    setData1({"labels" : ["Republicans"], "averages" : rnd, "state" : [""]})
                }
                else if (e[0] == "Democrat") {
                    var rnd1 = Array.from({length: 40}, () => (Math.random() * 1));
                    console.log("rand", rnd)
                    setData1({"labels" : ["Democrats"], "averages" : rnd1, "state" : [""]})
                }
                else {
                    var rnd2 = Array.from({length: 40}, () => (Math.random() * 1));
                    setData1({"labels" : ["Democrats", "Republicans"], "averages" : rnd2, "state" : [""]})
                }
            //     fetch(`/select_data${JSON.stringify(e)}`).then(
            //     res => res.json()
            //     ).then(
            //     data => {
            //         setData1(data)
            //         console.log("default fetch run")
            //         console.log(data)

            //     }
            //  )
            
            }
            if (graphtype == false) {
            // fetch(`/line_graph_data${JSON.stringify(e)}`).then(
            //     res => res.json()
            // ).then(
            //     data => {
            //         setData1(data)
            //         console.log("default line graph data", data)
            //         console.log(data)

            //     }
            // )
            // setData1({"20,000": 1},{"10,000": 1},{"20,000": 1},{"20,000": 1},{"20,000": 1},{"20,000": 1},{"20,000": 1},)
                
                
                setData1({"labels" : ["Democrats", "Republicans"], "averages" : rnd2, "state" : [""]})
            }
        }

}



export default ClickCountButton2;