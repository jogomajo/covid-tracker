import React from "react";
import CountUp from "react-countup";
import cx from "classnames";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";

import styles from "./Cards.module.css";

interface IProps {
  data: {
    confirmed: {
      value: number;
    };
    recovered: {
      value: number;
    };
    deaths: {
      value: number;
    };
    lastUpdate: string;
  };
}

const Cards: React.FC<IProps> = ({
  data: { confirmed, recovered, deaths, lastUpdate },
}) => {
  if (!confirmed) {
    return <p>"loading..."</p>;
  }

  const cardsDetails = [
    {
      title: "Infected",
      description: "Number of active cases of COVID-19",
      class: styles.infected,
      value: confirmed.value,
    },
    {
      title: "Recovered",
      description: "Number of recoveries from COVID-19",
      class: styles.recovered,
      value: recovered.value,
    },
    {
      title: "Deaths",
      description: "Number of deaths caused by COVID-19",
      class: styles.deaths,
      value: deaths.value,
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsDetails.map((card) => (
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, card.class)}
            key={card.title}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h5">
                <CountUp
                  start={0}
                  end={card.value}
                  duration={2.5}
                  separator=","
                />
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2">{card.description}</Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Cards;
