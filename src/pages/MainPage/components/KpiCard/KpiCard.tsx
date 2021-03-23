import React from 'react';
import classes from './KpiCard.module.css';
import { MetricItem } from "./components/metricItem";
import { metrics } from "./metrics";
import {Card} from "../../../components";

export const KpiCard: React.FC = () => {
    return (
        <Card title={
            <>
                КПЭ
                <span className={classes.title}>
                  За квартал
                </span>
            </>
        }>
            <div className={classes.kpiCard}>
              <div className={classes.header}>
                  <div className={classes.container}>
                      <span className={classes.subTitle}>
                          1 – 5 Февраля
                      </span>
                  </div>
              </div>
              <div className={classes.content}>
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
              <div className={classes.footer}>

              </div>
            </div>
        </Card>
    );
};