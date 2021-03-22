import React from "react";
import classes from './Header.module.css';
import avatar from './images/avatar.png';
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Header: React.FC = () => {
    return (
        <div className={classes.header}>
            <div className={classes.headerWrapper}>
                <div className={classes.leftSide}>
                    <img src={avatar} className={classes.avatarImg} />
                    <span className={classes.nameUser}>Владимир</span>
                </div>
                <div className={classes.rightSide}>
                    <FontAwesomeIcon icon={faAlignJustify} className={classes.menuIcon} size="3x"/>
                </div>
            </div>
        </div>
    );
};
