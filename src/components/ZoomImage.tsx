// ZoomImage - reusable zoom event for images

import React, { useState } from 'react';

//define props
type ImageProps = {
    src: string;
    alt: string;
    className?: string;
};

const ZoomImage = ({ src, alt, className }: ImageProps) => {

    //set state is the image focused or not - initially not
    const [isFocused, setIsFocused] = useState(false);

    //focuses wen mouse enters - did not work with focus?
    const handleMouseEnter = () => {
        setIsFocused(true);
    }

    //not focused when mouse leaves  - did not work with blur?
    const handleMouseLeave = () => {
        setIsFocused(false);
    }

    //returns an image defined elsewhere and zooms in 10% when hovered over
    return (
        <div>
            <img
                src={src}
                className={className}
                alt={alt}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                    transition: 'transform 0.3s ease',
                    transform: isFocused ? 'scale(1.1)' : 'scale(1)',
                }}
            >
            </img>
        </div>
    );
};

export default ZoomImage;
