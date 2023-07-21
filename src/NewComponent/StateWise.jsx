import React, { useEffect, useState } from "react";

const StateWise1 = () => {
  const [data, setdata] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const actualData = await res.json();
    setdata(actualData.statewise);
  }

    useEffect(() => {
      getCovidData();
    },[]);
    return (
      <>
        <h1> INDIA COVID-19 DASHBORD</h1>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">State</th>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">Confirmed</th>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">Recovered</th>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">Death</th>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">Active</th>
                <th style={{  backgroundColor:"black",color:"white"}} scope="col">Update</th>
              </tr>
            </thead>
            <tbody>
                {data.map((item,index)=>
                {
                    return(
                                            <tr key={index}>
                                                <th style={{backgroundColor:"yellowgreen", color:"red"}}>{item.state}</th>
                                                <td>{item.confirmed}</td>
                                                <td>{item.recovered}</td>
                                                <td>{item.deaths}</td>
                                                <td>{item.active}</td>
                                                <td>{item.lastupdatedtime}</td>
                                            </tr>
                                        )
                })}
              
            </tbody>
          </table>
        </div>
      </>
    );
  };  

export default StateWise1;
