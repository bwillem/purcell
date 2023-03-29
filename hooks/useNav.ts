import useStore from "@/store"
import { useEffect, useRef } from "react"
import useIsOnScreen from "./useIsOnScreen"

function useNav(navLinkId: string) {
    const ref = useRef(null)
    const setActive = useStore(s => s.setActiveLinkId)

    const isOnScreen = useIsOnScreen(ref)

    useEffect(() => {
        if (isOnScreen) setActive(navLinkId)
    }, [navLinkId, isOnScreen])

    return ref
}

export default useNav