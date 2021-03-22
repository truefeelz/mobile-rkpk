import React from "react";
import classes from "./MetricItem.module.css";

interface IProps {
    title: string;
    subtitle: string;
    imagePath: string | null;
    metric: number | null;
    delta: number | null;
}

export const MetricItem: React.FC<IProps> = (props) => {
    const { title, subtitle, imagePath, metric, delta} = props;

    const deltaSign = delta ? ((delta < 0) ? '-' : (delta > 0) ? '+' : '') : '--';
    const deltaClasses = delta ? ((delta < 0) ? classes.deltaRed : classes.deltaGreen) : classes.deltaWhite;

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <div className={classes.title}>{title}</div>
                <div className={classes.subtitle}>{subtitle}</div>
            </div>
            <div className={classes.infoContainer}>
                <div className={classes.graphContainer}>
                    {imagePath && <img src={imagePath} className={classes.graph} />}
                </div>
                <div className={classes.metricsContainer}>
                    <div className={classes.metric}>{metric ?? '-'}</div>
                    <div className={deltaClasses}>
                        {deltaSign}{delta}
                    </div>
                </div>
            </div>
        </div>
    );
};