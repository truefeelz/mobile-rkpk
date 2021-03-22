import React from 'react';
import classes from './KpiCard.module.css';
import { MetricItem } from "./components/metricItem";
import { metrics } from "./metrics";

export const KpiCard: React.FC = () => {
    return (
        <div className={classes.page}>
          <div className={classes.pageHeader}>
              <div className={classes.container}>
                  <span className={classes.title}>
                      КПЭ
                  </span>
                  <span className={classes.subTitle}>
                      1 – 5 Февраля
                  </span>
              </div>
          </div>
          <div className={classes.pageContent}>
              <div className={classes.container}>
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
          </div>
          <div className={classes.pageFooter}>

          </div>
        </div>
    );
};