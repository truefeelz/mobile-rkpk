import React from "react";
import {EventCard, KpiCard} from "./components";
import { Header } from "../components";
import classes from "./MainPage.module.css";

export const MainPage: React.FC = () => {
    return (
        <div className={classes.pageWrapper}>
            <Header />
            <div className={classes.contentWrapper}>
                <KpiCard />
                <EventCard />
            </div>
        </div>
    );
};
