import { create } from 'zustand'

export type WindowState = {
    id: number
    title: string
    x: number
    y: number
    isMaximized: boolean
}

type Store = {
    windows: WindowState[]
    openWindow: (title: string) => void
    closeWindow: (id: number) => void
    toggleMaximize: (id: number) => void
}

export const useStore = create<Store>((set) => ({
    windows: [],

    openWindow: (title) =>
        set((state) => ({
            windows: [
                ...state.windows,
                {
                    id: Date.now(),
                    title,
                    x: 150 + state.windows.length * 30,
                    y: 150 + state.windows.length * 30,
                    isMaximized: false
                },
            ],
        })),

    closeWindow: (id) =>
        set((state) => ({
            windows: state.windows.filter((w) => w.id !== id),
        })),
    
    toggleMaximize: (id) => 
        set((state) => ({
            windows: state.windows.map((w) => 
                w.id === id ? {...w, isMaximized: !w.isMaximized } : w
            ),
        })),
}))
