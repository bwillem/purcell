import { RefObject, useEffect, useState } from "react"

function useIsOnScreen(ref: RefObject<any>) {
    const [is, setIs] = useState(false)

    const observer = (typeof window !== 'undefined') &&
        new IntersectionObserver(
            ([entry]) => { console.log('is intersecting', entry.isIntersecting); setIs(entry.isIntersecting) },
            {
                threshold: [0.25, 0.5, 0.75],
            })

    useEffect(() => {
        if (!observer) return
        if (!ref.current) return
        console.log('setting observer', ref.current)
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref.current])

    return is
}

export default useIsOnScreen