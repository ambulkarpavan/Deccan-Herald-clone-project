import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./BusinessStyle.module.css";

const Business = () => {
  const [business , setBusiness ] = useState([]);

  useEffect(() => {
    const API = "8567baa900c743778110f4f711896408"
    if(business.length ==0){
      axios({
        url: `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${API}`,
        method: "GET",
      }).then((r) => {
         setBusiness(r.data.articles);
      });


    }
  
  },[]);

  return (
    <div className={styles.bcontainer}>
      <h2 className={styles.bheading}>BUSINESS</h2>
      <div className={styles.btopdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/15/google-afp-1118338-1655289116.jpg?itok=jp3VaH97" />
        <div className={styles.bhead}>
          <h1>Google sidelines engineers who claims its all it sentient</h1>
        </div>
      </div>
      <div className={styles.bmaindiv}>
        {business .map((e) => (
          <div>
            <img src={e.urlToImage} className={styles.bcimg} />
            <h1>{e.title}</h1>
            <p>{e.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business ;