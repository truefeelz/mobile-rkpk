import React from 'react';
import classes from './EventCard.module.css';
import { EventItem } from "./components"
import {events} from "./events";
import {Card} from "../../../components";

export const EventCard: React.FC = () => {
    return (
        <Card title={
            <>
                События
            </>
        }>
            <div className={classes.eventCard}>
                <div className={classes.header}>
                    <div className={classes.container}>
                      <span className={classes.subTitle}>
                          Апрель
                      </span>
                    </div>
                </div>
                <div className={classes.content}>
                    <div className={classes.container}>
                        {events.map(({ title,fullName,dayNumber,dayName,rank,company }) => (
                            <EventItem
                                title={title}
                                fullName={fullName}
                                dayNumber={dayNumber}
                                dayName={dayName}
                                rank={rank}
                                company={company}/>
                        ))}
                    </div>
                </div>
                <div className={classes.footer}>

                </div>
            </div>
        </Card>
    );
};