import React from 'react';
import classes from './KpiPage.module.css';
import {MetricItem} from "./components/metricItem";
import {metrics} from "./metrics";

export const KpiPage: React.FC = () => {
    return (
        <div className={classes.page}>
            {metrics.map(({ title, subtitle, imagePath, metric, delta}) => (
                <MetricItem
                    title={title}
                    subtitle={subtitle}
                    imagePath={imagePath}
                    metric={metric}
                    delta={delta}
                />
            ))}
        </div>
    );
};