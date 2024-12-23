import classNames from 'classnames';

const Skeleton = ({ times, className }) => {
    const outerStyle = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerStyle = classNames(
        "animate-shimmer",
        "absolute",
        "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white",
        "to-gray-200"
    );

    const boxes = Array(times).fill(0).map((_, i) => {
        return <div key={i} className={outerStyle}>
            <div className={innerStyle}></div>
        </div>
    });
    console.log(boxes);



    return boxes;
};

export default Skeleton;