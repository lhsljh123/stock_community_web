import React, { useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios";
const Home = () => {
  useEffect(() => {
    axios
      .get("https://www.naver.com.com/")
      .then( (data) => {
        console.log("test2");
        console.log("data", data);
      })
  
  }, [])
  return (
        <>
            
        </>
  )
}


export default Home

const Cover = styled.div`
    width: 1160px;
    margin: 0 auto;
`