import React from 'react';
import classes from './KpiCard.module.css';
import { MetricItem } from "./components/metricItem";
import { metrics } from "./metrics";
import {Card, Dropdown} from "../../../components";

const menuItems = [
    {
        title: 'За неделю',
        onClick: () => void 0
    },
    {
        title: 'За месяц',
        onClick: () => void 0
    },
    {
        title: 'За квартал',
        onClick: () => void 0
    },
];

export const KpiCard: React.FC = () => {
    return (
        <Card title={
            <>
                КПЭ
                <Dropdown items={menuItems}>
                    <span className={classes.title}>
                      За квартал
                    </span>
                </Dropdown>
            </>
        }>
            <div className={classes.page}>
              <div className={classes.pageHeader}>
                  <div className={classes.container}>
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
        </Card>
    );
};