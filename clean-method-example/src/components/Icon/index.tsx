import React from 'react';
//import iconPath from '../../shared';
interface IconTypes {
    size?: number;
    color?: string;
    icon: string;
    viewBox?: string;
    style?: object;
    className?: string;
}
const defaultStyles = { display: 'inline-block', verticalAlign: 'middle' };

const Icon = ({ size = 16, color = '#000000', icon, className = '', style = {}, viewBox = '0 0 24 24' }: IconTypes) => {
    const styles = { ...defaultStyles, ...style };
    return (
        <svg
            className={className}
            style={styles}
            viewBox={viewBox}
            width={`${size}px`}
            height={`${size}px`}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            {/* <path fill={color} d={iconPath[icon]} /> */}
        </svg>
    );
};

export default Icon;
