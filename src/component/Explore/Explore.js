import React from "react";
import styles from "./style.module.css";
import Card1 from "./Card1";
import {dataE} from "./data.js"
import Button from "../reusedComponent/Button/Button";
import Title from "../reusedComponent/Title/Title";
import Container from "../reusedComponent/Container/Container";

import E1 from './assets/E1.png'
import E2 from './assets/E2.png'
import E3 from './assets/E3.png'
const Explore = () => {

  return (
    <div className={styles.mainContainer}>

      <Title title="Explore" />
      <Container>
      <div className={styles.exploreContainer}>
        <div className={styles.first}>
          <Card1>
            <h3 className={styles.Title}>{dataE[0].title}</h3>
            <p className={styles.Description}>
              {dataE[0].description}
            </p>
            <img
              className={styles.Image}
              src={E1}
              alt="post description img"
            />
          </Card1>
        </div>

        <div className={styles.otherContainer}>
          <Card1>
            <h3 className={styles.rightTitle}>{dataE[1].title}</h3>
            <p className={styles.rightDescription}>
              {dataE[1].description}
            </p>
            <img
              className={styles.rightImage}
              src={E2}
            />
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle1}>{dataE[2].title}</h3>
            <p className={styles.rightDescription1}>
              {dataE[2].description}
            </p>
           
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle2}>{dataE[3].title}</h3>
            <p className={styles.rightDescription2}>
              {dataE[3].description}
            </p>
           
          </Card1>

          <Card1>
            <h3 className={styles.rightTitle1}>{dataE[4].title}</h3>
            <img
              className={styles.rightImage}
              src={E3}
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