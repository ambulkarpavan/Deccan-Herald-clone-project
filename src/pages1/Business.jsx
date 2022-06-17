import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./BusinessStyle.module.css";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Business = () => {
  const [business , setBusiness ] = useState([]);             

  useEffect(() => {
    axios({
      url: "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=6f43be9f49cf4702b914421834ff3c3e",
      method: "GET",
    }).then((r) => {
       setBusiness(r.data.articles);
    });
  });

  return (
    <div className={styles.bcontainer}>
      <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Business</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Business</Tab>
    <Tab >BUSINESS NEWS</Tab>
    <Tab >FAMILY FINANCE</Tab>
    <Tab >TECHNOLOGY</Tab>
    <Tab> DH WHEELS</Tab>
    
    
  </TabList>
  
</Tabs>
</div>
      <h2 className={styles.bheading}>BUSINESS</h2>
      <div className={styles.btopdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/15/google-afp-1118338-1655289116.jpg?itok=jp3VaH97" />
        <div className={styles.bhead}>
          <h1>Google sidelines engineers who claims its all it sentient</h1>
        </div>
      </div>
      <div className={styles.bmaindiv}>
        {business.map((e,index) => (
          <div key={index}>
            <img src={e.urlToImage} className={styles.bcimg} />
            <Link to={`/business/${index}`}> <h5>{e.title}</h5></Link>
            {/* <h1>{e.title}</h1> */}
            <p>{e.publishedAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Business ;