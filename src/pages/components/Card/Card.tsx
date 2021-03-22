import React, {ReactNode, useState} from "react";
import classes from "./Card.module.css";

interface IProps {
    title: string;
    children: ReactNode;
}

export const Card: React.FC<IProps> = (props) => {
    const {title, children} = props;

    const [expend, setExpend] = useState(false);
    const [minimize, setMinimize] = useState(false);

    return (
        <div className={classes.container}>
            <div className={classes.header}>
                <div className={classes.headerTitle}>{title}</div>
                <div className={classes.headerButtons}>
                    <div
                        className={classes.headerMinimize}
                        onClick={() => setMinimize(!minimize)}
                    >
                        {minimize ? 'Развернуть' : 'Свернуть'}
                    </div>
                    <div className={classes.headerOptions}>...</div>
                </div>
            </div>
            <div className={minimize ? classes.contentAndFooterMinimized : classes.contentAndFooter}>
                <div className={expend ? classes.contentExpanded : classes.content}>{children}</div>
                <div className={classes.footer}>
                    <div
                        className={classes.footerButton}
                        onClick={() => setExpend(!expend)}
                    >
                        {expend ? 'Показать меньше' : 'Показать больше'}
                    </div>
                </div>
            </div>
        </div>
    );
};