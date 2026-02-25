"use client";

import { useState, useEffect } from 'react';

export const useTypingEffect = (texts: string[], typingSpeed = 100, pauseTime = 2000) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (subIndex === texts[index].length + 1 && !isDeleting) {
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
        }

        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
            setDisplayText(texts[index].substring(0, subIndex));
        }, isDeleting ? typingSpeed / 2 : typingSpeed);

        return () => clearTimeout(timeout);
    }, [subIndex, index, isDeleting, texts, typingSpeed, pauseTime]);

    return displayText;
};
