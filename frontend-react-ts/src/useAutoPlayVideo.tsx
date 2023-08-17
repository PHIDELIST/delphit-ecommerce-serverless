import {useEffect, useState, RefObject} from 'react'

const useAutoPlayVideo = (videoRef:RefObject<HTMLVideoElement>): boolean => {
    const [shouldPlay, setShouldPlay] = useState(false);

    useEffect(() => {
        const options = {
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) {
                    setShouldPlay(true);
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        if(videoRef.current) {
            observer.observe(videoRef.current);
        }

        return() => {
            if(videoRef.current){
                observer.unobserve(videoRef.current)
            }
        };
    }, [videoRef]);
    return shouldPlay;
}
export default useAutoPlayVideo;