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

export const Dropdown: React.FC<IProps> = ({children, items}) => {
    const [visible, setVisible] = useState(false);

    return (
        <div className={classes.dropdown}>
            <div onClick={() => setVisible(!visible)}>
                {children}
            </div>
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
