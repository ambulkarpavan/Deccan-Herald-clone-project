import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./SportsStyle.module.css";

const Sport = () => {
  const [sports, setSports] = useState([]);
 

  useEffect(() => {
    const API = "8567baa900c743778110f4f711896408"
    if(sports.length === 0){
      axios({
        url: `https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API}`,
        method: "GET",
      }).then((r) => {
        setSports(r.data.articles);
      });


    }
  
  },[]);

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>SPORTS</h2>
      <div className={styles.topdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/15/2022-06-14t174831z658998890up1ei6e1dgt13rtrmadp3cricket-test-eng-nzljpg-1-1118302-1655282680.jpg?itok=Bip8P7m6" />
        <div className={styles.head}>
          <h1>England fined for slow over rate in 2nd test against NZ</h1>
        </div>
      </div>
      <div className={styles.maindiv}>
        {sports.map((e) => (
          <div>
            <img src={e.urlToImage} className={styles.cimg} />
            <h1>{e.title}</h1>
            <p>{e.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sport;