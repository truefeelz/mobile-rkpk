import React from "react";
import classes from './InfoBlock.module.css';
import cupImage from './images/Vector.svg';

export const InfoBlock: React.FC = () => {
    return (
        <div className={classes.infoBlock}>
            <div className={classes.infoBlockWrapper}>
                <div className={classes.rightSide}>
                    <img src={cupImage} className={classes.imgCup}/>
                    <span className={classes.title}>Владимир, ваша КПК на <b>30 месте</b>!
                        Прогноз на конец квартала – <b>24 место</b>. Так держать!
                    </span>
                </div>
                <div className={classes.leftSide}>
                    <span className={classes.subTitle}>Подробнее</span>
                </div>
            </div>
        </div>
    );
};
