import classNames from "classnames";
import { useState } from 'react';
import { GoChevronUp, GoChevronDown, GoChevronLeft } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
    const [expand, setExpand] = useState(false);

    const style1 = classNames("mb-2 border rounded");
    const style2 = classNames("p-2 flex items-center justify-between");
    const style3 = classNames("flex flex-row items-center justify-center");
    const contentsStyle = classNames("p-2 border-t");
    const iconStyle = classNames("cursor-pointer");

    const handleExpandClick = (e) => {
        setExpand(!expand);
    }

    const contents = (
        <div className={contentsStyle}>
            {children}
        </div>
    )

    return (
        <div className={style1}>
            {/* HEADER */}
            <div className={style2}>
                <div className={style3}>
                    {header}
                </div>
                <div className={iconStyle} onClick={handleExpandClick}>
                    {expand ? <GoChevronDown /> : <GoChevronLeft />}
                </div>
            </div>
            {/* CONTENTS */}
            {
                expand && contents
            }

        </div>
    )
};

export default ExpandablePanel;