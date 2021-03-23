import React, {ReactNode, useState} from "react";
import classes from "./Dropdown.module.css";

interface IItem {
    title: string;
    onClick: () => void;
}

interface IProps {
    children: ReactNode;
    items: IItem[];
}

export const Dropdown: React.FC<IProps> = (props) => {
    const {children, items} = props;

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => setVisible(!visible);

    return (
        <div className={classes.dropdown}>
            <div className={classes.filterWrapper} onClick={toggleVisible}>
                {children}
            </div>
            <div
                className={visible ? classes.closeTriggerActive : classes.closeTrigger}
                onClick={() => visible && toggleVisible()}
            />
            {visible &&
                <div className={classes.dropdownContent}>
                    {items.map(({title, onClick}) =>
                        <a href="#" className={classes.item} onClick={onClick}>{title}</a>)
                    }
                </div>
            }
        </div>
    );
};
