import React, { useState } from "react";
import { data } from "../Data.js";
import { FaStar } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { PiForkKnifeFill } from "react-icons/pi";

import './Home.css';

const Home = () => {
  const [food, setFood] = useState(data);

  function filterData(name) {
    let filterData = data.filter((item) => {
      if (item.name.toLowerCase().includes(name.trim())) {
        return true;
      }
      return false;
    });
    setFood(filterData);
  }

  // this will update the raitng of items
  function updateRating(e) {
    let obj = [...food];

    obj[0].rating = e.target.value;

    setFood(obj);
  }

  // solid principle and clean code

  return (
   <div className="main-container" >
        <div className="input-boxs">
            <input
            type="text"
            name="search"
            placeholder="Search restorents..."
            onChange={(e) => {
                filterData(e.target.value);
            }}
            id="input-box"/>

            <label htmlFor="number-box" style={{display : "flex" , justifyContent : "center", alignItems : "center", gap: "20px"}}>
               <h3 style={{fontWeight : "0px"}}>Minimum Rating :</h3>
                <input
                value="0"
                type="number"
                name="rating"
                placeholder="Enter Rating"
                onChange={updateRating}
                id="number-box"/>
            </label>
        </div>
        <div className="foods">
        {food.map((item) => {
        return (
          <div className="box"
            key={item._id.$oid}
          >
            <div className="details">
              <div className="rating" style={{marginBottom : "10px"}}>
                <h3 style={{width : "200px", textAlign : "start", fontSize : "22px"}}>{item.name}</h3>
                <p className="rat">{<FaStar />}{<FaStar />}{<FaStar />}{<FaStar />}{<FaStar />}</p>
              </div>
                <p className="add"  style={{marginBottom : "10px"}}>{<IoLocationSharp /> } {item.address} {" "}{item["address line 2"]}</p>
                <div style={ {display : "flex", gap : "5px"}}>
                    <i>{item.outcode}</i>
                    <li >{item.postcode}</li>
                </div>
            </div>
            <div className="type" style={{display: "flex" , flexDirection : "column", justifyContent : "flex-start", alignItems : "flex-start",fontSize : "20px", paddingTop : "17px"}}>
                <p className="types" style={{color : "green"}}>{<PiForkKnifeFill />}{" "}{item.type_of_food}</p>
                <a href={item.URL} className="types" style={{textDecoration : "none", fontSize : "15px", marginBottom : "15px"}}>Visit Menu</a>
            </div>
          </div>
        );
      })}
        </div>
      
    </div>
  )
};

export default Home;