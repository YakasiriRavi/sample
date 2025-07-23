import React, { useState, useEffect } from "react";
import axios from "axios";

function Main() {
  const [userInfo, setUserInfo] = useState([])
  console.log("API", userInfo)
  const getUserDetails = () => {
    axios.get("https://dummyjson.com/users").then((res) => setUserInfo(res.data.users))
    //res-data-users-[{},{}] ===> res.data.users= >[{},{}]== array of objects
  }
  //React js hooks 16.8 version and this hooks applicable to only functional components.
  //life cycle management(LCM) - mounting and updating and unmounting phases
  // in case of class components to handle the life cycle management , we need to have multiple methods to handle it.
  // but in case of functional components, useEffect hook is only sufficient to handle LCM.
  //if we keep empty array in the dependancy section it means call only once.
  useEffect(() => {
    getUserDetails() //mounting phase
    // (()=>getUserDetails() ) // unmounting
  }, []) // updating phase
  //indantation error 
  return (
    <>
      <div>
        {userInfo && userInfo.map((value) => {
          return (
            <>
              <div className="container">
                {userInfo && userInfo.map((value) => (
                  <div className="card" key={value.id}>
                    <div className="card__header">
                      <img
                        src="https://t4.ftcdn.net/jpg/03/06/63/61/360_F_306636176_KQbxttYdxWHsH3S6bYCD47NvVGdTL2xV.jpg"
                        alt="card"
                        className="card__image"
                      />
                    </div>
                    <div className="card__body">
                      <span className="tag tag-blue">Technology</span>
                      <h4>{value.firstName} {value.lastName}</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className="card__footer">
                      <div className="user">
                        <img src={value.image} alt="user" className="user__image" />
                        <div className="user__info">
                          <h5>{value.firstName} {value.lastName}</h5>
                          <small>2h ago</small>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </>
          )
        })}
      </div>
    </>
  );
}

export default Main;