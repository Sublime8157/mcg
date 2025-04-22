import { useRef, useState, useEffect } from "react"

const useVisibilityObserver = (threshold = 0.5) => {
    const targetRef = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if(!isVisible){
            const observer = new IntersectionObserver(
                ([entry], obs) => {
                    if(entry.isIntersecting){
                        setIsVisible(true)
                        obs.unobserve(entry.target)
                    }
                }, 
                { threshold }
            ); 

            const current = targetRef.current
            if (current) observer.observe(current)

            return () => {
                if (current) observer.unobserve(current)
            }
        }
    }, [targetRef, isVisible])

    return { targetRef, isVisible }
}

export default useVisibilityObserver