import React from "react";
import { InfoBlock } from "./components";
import classes from './Header.module.css';
import avatarImg from './images/avatar.png';
import menuImg from './images/menu.svg';

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.content}>
                    <div className={classes.leftSide}>
                        <img src={avatarImg} className={classes.avatarImg} />
                        <span className={classes.nameUser}>Владимир</span>
                    </div>
                    <div className={classes.rightSide}>
                       <img src={menuImg} className={classes.menuImg} />
                    </div>
                </div>
                <InfoBlock />
            </div>
        </div>
    );
};
