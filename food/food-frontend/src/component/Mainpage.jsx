import React, { useState } from 'react'
import Mealcard from './Mealcard'

const Mainpage =() =>{
    const [data, setData] =useState(null)
    const [search ,setSearch] =useState()


    const handleChange =(e)=>{
        setSearch(e.target.value)
    }


    const myFun = async () => {
          try {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            const jsonData = await get.json();
            setData(jsonData.meals);
            // console.log(jsonData);
           
        } catch (error) {
            console.error("Error fetching data:", error);
        }
      
    };

    


    return (
        <div className='container'>
            <div className='serch-bar'>
                <input type='text' placeholder='search food name' onChange={handleChange}/>
                <button onClick={myFun}>Search</button>
            </div>
                     <div>
                     <Mealcard details ={data}/>
                     </div>
        </div>
    )
}
export default Mainpage