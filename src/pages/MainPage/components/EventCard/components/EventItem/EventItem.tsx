import React from "react";
import classes from "./EventItem.module.css";
import classNames from 'classnames';

interface IProps {
    title: string;
    fullName: string | null;
    dayNumber: number;
    dayName: string;
    rank: string | null;
    company: string;
}

export const EventItem: React.FC<IProps> = (props) => {
    const { title, fullName, dayNumber, dayName, rank, company} = props;

    const rankLabel = rank && `${rank} • `

    return (
        <div className={classes.container}>
            <div className={classes.dayContainer}>
                <div className={classes.dayBlock}>
                    <span>{dayName}</span>
                    <span className={classes.dayNumbTitle}>{dayNumber}</span>
                </div>
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.title}>{title}</div>
                <div className={classes.subtitle}>{fullName}</div>
                <div className={classNames(classes.personInfo,classes.subtitle)}>
                    <span>{rankLabel}</span>
                    <span>{company}</span>
                </div>
            </div>
        </div>
    );
};