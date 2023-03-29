import { create } from 'zustand'

interface Store {
    activeLinkId: string
    activeContainerId: string
    setActiveLinkId: (id: string) => void
    setActiveContainerId: (id: string) => void
}

const useStore = create<Store>()(set => ({
    activeLinkId: 'home',
    activeContainerId: 'home',
    setActiveLinkId: (activeLinkId: string) => set(s => ({ ...s, activeLinkId })),
    setActiveContainerId: (activeContainerId: string) => set(s => ({ ...s, activeContainerId })),
}))

export default useStore