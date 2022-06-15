import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import style from "../Pages/page.module.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';


const Home = () => {
  const [topHeadLine, setTopHeadLine] = useState([]);
  const [national, setNational] = useState([]);
  const [bussiness, setBussiness] = useState([]);
  const [tech, setTech] = useState([]);
  useEffect(() => {
    const getNews = () => {
      // top head
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&apiKey=0262fcb147b7460fa66ab22d917cb183"
        )
        .then((res) => {
          console.log(res.data.articles);
          setTopHeadLine(res.data.articles);
        });

      // national
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=0262fcb147b7460fa66ab22d917cb183&q=india"
        )
        .then((res) => {
        //   console.log(res.data.articles);
          setNational(res.data.articles);
        });

      // top bussiness
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0262fcb147b7460fa66ab22d917cb183"
        )
        .then((res) => {
        //   console.log(res.data.articles);
          setBussiness(res.data.articles);
        });

      // top Tech
      axios
        .get(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0262fcb147b7460fa66ab22d917cb183"
        )
        .then((res) => {
        //   console.log(res.data.articles);
          setTech(res.data.articles);
        });
    };

    getNews();
  }, []);

  return (
    <>
      <h1 className={style.h1}>Top Story </h1>
      <div className={style.homeBox}>
        {topHeadLine.map(({ urlToImage, title }, index) => {
           console.log(uuidv4())
          return (
                     <>
             <div key={uuidv4()} >
            <Card style={{ width: "18rem" }}  >
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                {/* <Card.Title> Title</Card.Title> */}
                <Card.Text>{title}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
            </>
          );
        })}
      </div>


      <h1 className={style.h1}>National  </h1>
      <div className={style.homeBox}>
        {national.map(({ urlToImage, title }, index) => {
           console.log(uuidv4())
          return (
                     <>
             <div key={uuidv4()} >
            <Card style={{ width: "18rem" }}  >
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                {/* <Card.Title> Title</Card.Title> */}
                <Card.Text>{title}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
            </>
          );
        })}
      </div>



      <h1 className={style.h1}>Bussiness </h1>
      <div className={style.homeBox}>
        {bussiness.map(({ urlToImage, title }, index) => {
           console.log(uuidv4())
          return (
                     <>
             <div key={uuidv4()} >
            <Card style={{ width: "18rem" }}  >
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                {/* <Card.Title> Title</Card.Title> */}
                <Card.Text>{title}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
            </>
          );
        })}
      </div>


      <h1 className={style.h1}>Technology</h1>
      <div className={style.homeBox}>
        {tech.map(({ urlToImage, title }, index) => {
          
          return (
                     <>
             <div key={uuidv4()} >
            <Card style={{ width: "18rem" }}  >
              <Card.Img variant="top" src={urlToImage} />
              <Card.Body>
                {/* <Card.Title> Title</Card.Title> */}
                <Card.Text>{title}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
            </div>
            </>
          );
        })}
      </div>

    </>
  );
};

export default Home;
