import React from "react";
import { InfoBlock } from "./components";
import classes from './Header.module.css';
import avatarImg from './images/avatar.png';
import menuImg from './images/menu.svg';
import {Dropdown} from "../Dropdown";

const menuItems = [
    {
        title: 'Профиль',
        onClick: () => void 0
    },
    {
        title: 'Настройки',
        onClick: () => void 0
    },
];

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.content}>
                    <div className={classes.leftSide}>
                        <img src={avatarImg} className={classes.avatarImg} />
                        <span className={classes.nameUser}>Арина</span>
                    </div>
                    <div className={classes.rightSide}>
                        <Dropdown items={menuItems}>
                            <img src={menuImg} className={classes.menuImg} />
                        </Dropdown>
                    </div>

                </div>
                <InfoBlock />
            </div>
        </div>
    );
};
