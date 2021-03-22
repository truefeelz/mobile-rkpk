import React from "react";
import { KpiCard } from "./components";
import { Header } from "../components";

export const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <KpiCard />
        </>
    );
};
