import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import ClassNames from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    // console.log(props);
    console.log(confirmed);
    if (!confirmed) {
        return 'Loading...';
    }
    return (
        <div className={styles}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Infected </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Active Cases of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Recovered </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Recoveries of COVID-19 </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={ClassNames(styles.card,styles.deaths)}>     
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom> Death </Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary"> {new Date(lastUpdate).toDateString()} </Typography>
                        <Typography variant="body2"> Number of Deaths in COVID-19 </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}
export default Cards