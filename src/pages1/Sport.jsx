import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./SportsStyle.module.css";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


const Sport = () => {
  const [sports, setSports] = useState([]);
 

  useEffect(() => {

    axios({

      url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=31ca501b6ce84f2896151e26cc73a627",

      url: "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6f43be9f49cf4702b914421834ff3c3e",

      method: "GET",
    }).then((r) => {
      setSports(r.data.articles);
    });
  });

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

    <>
      <h2 className={styles.heading}>SPORTS</h2>

    <div className={styles.container}>
        <div>
    <Breadcrumb>
<BreadcrumbItem>
<BreadcrumbLink href='#'>Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbItem isCurrentPage>
<BreadcrumbLink href='#'>Sports</BreadcrumbLink>
</BreadcrumbItem>
</Breadcrumb>
</div>
<div style={{borderBottom:"1px solid rgb(154, 149, 149)"}}>
<Tabs variant='unstyled'>
  <TabList>
    <Tab _selected={{ color: 'white', bg: 'green.400', fontWeight:"bold" , fontSize:"30px", paddingRight:"40px"}}>Sports</Tab>
    <Tab >Cricket</Tab>
    <Tab >Football</Tab>
    <Tab >Tennis</Tab>
    <Tab> Formula 1</Tab>
    <Tab >Other Sports</Tab>
    
  </TabList>
  
</Tabs>
</div>
     
      <h1 className={styles.heading}>SPORTS</h1>

      <div className={styles.topdiv}>
        <img src="https://www.deccanherald.com/sites/dh/files/styles/largehorizontal/public/articleimages/2022/06/15/2022-06-14t174831z658998890up1ei6e1dgt13rtrmadp3cricket-test-eng-nzljpg-1-1118302-1655282680.jpg?itok=Bip8P7m6" />
        <div className={styles.head}>
          <h1>England fined for slow over rate in 2nd test against NZ</h1>
        </div>
      </div>

      <div className={styles.sport_static3}>
        <img src="https://s0.2mdn.net/simgad/17024372840213018262" />
      </div>

      <div className={styles.sport_static}>
        <div className={styles.container}>
          <div className={styles.maindiv} >
            {sports.map((e) => (
              <div className={styles.maindiv1} >
                <div className={styles.imgdiv}>
                <img src={e.urlToImage} className={styles.cimg} /></div>
                <h1>{e.title}</h1>
                <p>{e.publishedAt}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sport_static2}>
          <div className={styles.static4}>
            <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2022/06/14/england-v-new-zealand-reuters-1118192-1655226288.jpg?itok=cw6ccJvt" />
            <h1>England beats Nz by 5 wickets in 2nd Test</h1>
          </div>
          <img
            src="https://tpc.googlesyndication.com/simgad/13957262966767615251?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qkHwlVpLKUm5BSspD8jH7tJub72gw"
            className={styles.static4}
          />
          <img src="https://s0.2mdn.net/simgad/7944408253820850544" alt="" />
          <div className={styles.static4}>
            <img src="https://www.deccanherald.com/sites/dh/files/styles/largevertical/public/articleimages/2021/12/19/srikanth-afp-1062581-1639929471.jpg?itok=xynOyGGP" />
            <h1>England beats Nz by 5 wickets in 2nd Test</h1>

      <div className={styles.maindiv}>
        {sports.map((e,index) => (
          <div key={index}>
            <img src={e.urlToImage} className={styles.cimg} />
            <Link to={`/sport/${index}`}> <h5>{e.title}</h5></Link>
            {/* <h1>{e.title}</h1> */}
            <p>{e.publishedAt}</p>

          </div>
        </div>
      </div>
    </>
  );
};

export default Sport;
