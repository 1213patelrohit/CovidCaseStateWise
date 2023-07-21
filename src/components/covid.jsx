import React, { useEffect, useState } from 'react'
import './covid.css'
const Covid = () => {
    const [data, setdata] = useState([])
    const getcovidData = async () => {

        try {
            const res = await fetch(' https://data.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData)
            setdata(actualData.statewise[0])
        } catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        getcovidData();
    }, [])


    return (
        <>
            <section >
          
                <h1>

                <button type="button" class="btn btn-primary">LIVE</button>
                </h1>
                <h2>
                    COVID-19 CORONAVIRUS TRACKER
                </h2>
                <ul>
                    <li className='li1'>
                        <p><span className='span1'>OUR</span>COUNTRY</p>
                        <p> INDIA</p>
                    </li>
                    <li className='li2'>
                        <p><span className='span1'>TOTAL</span>RECOVERED</p>
                        <p> {data.recovered}</p>
                    </li> <li className='li3'>
                        <p><span className='span1' >TOTAL</span>CONFIRM</p>
                        <p> {data.confirmed}</p>
                    </li></ul>
                    <ul> <li className='li4'>
                        <p><span className='span1' >TOTAL</span>DEATHS</p>
                        <p> {data.deaths}</p>
                    </li> <li className='li5'>
                        <p><span className='span1'>TOTAL</span> ACTIVE</p>
                        <p> {data.active}</p>
                    </li> <li className='li6'>
                        <p><span className='span1'>LAST</span>UPDATE</p>
                        <p> {data.lastupdatedtime}</p>

                    </li>
                </ul>
            </section>

        </>
    )
}

export default Covid