import React from "react";
import styles from "./style.module.css";
import Card1 from "./Card1";
import {data} from "./data.js"
import Button from "../reusedComponent/Button/Button";
import Title from "../reusedComponent/Title/Title";
import Container from "../reusedComponent/Container/Container";


const Explore = () => {
 
  return (
    <div className={styles.mainContainer}>

      <Title title="Explore" />
      <Container>
      <div className={styles.exploreContainer}>
        <div className={styles.first}>
          <Card1>
            <h3 className={styles.Title}>{data[0].title}</h3>
            <p className={styles.Description}>
              {data[0].description}
            </p>
            <img
              className={styles.Image}
              src={data[0].image}
              alt="post description img"
            />
          </Card1>
        </div>

        <div className={styles.otherContainer}>
          <Card1>
            <h3 className={styles.rightTitle}>{data[1].title}</h3>
            <p className={styles.rightDescription}>
              {data[1].description}
            </p>
            <img
              className={styles.rightImage}
              src={data[1].image}
            />
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle1}>{data[2].title}</h3>
            <p className={styles.rightDescription1}>
              {data[2].description}
            </p>
           
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle2}>{data[3].title}</h3>
            <p className={styles.rightDescription2}>
              {data[3].description}
            </p>
           
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle1}>{data[4].title}</h3>
            <img
              className={styles.rightImage}
              src={`./assets/E1.png`}
            />
          </Card1>
        </div>
      </div>
      </Container>
      <Button text="see the journal" />

    </div>
  );
};

export default Explore;