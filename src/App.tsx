import './App.css'
import Dock from './components/Dock'
import Window from './components/Window'
import { useStore } from './store/useStore'

import Counter from './apps/Counter'

function App() {
    const windows = useStore((s) => s.windows)
    const closeWindow = useStore((s) => s.closeWindow)
    const toggleMaximize = useStore((s) => s.toggleMaximize)

    return (
        <>
            <div>
                {windows.map((w) => (
                    <Window
                        key={w.id}
                        title={w.title}
                        x={w.x}
                        y={w.y}
                        onClose={() => closeWindow(w.id)}
                        onMaximize={() => toggleMaximize(w.id)}
                        isMaximized={w.isMaximized}
                    >
                        <Counter />
                    </Window>
                ))}
            </div>
            <Dock />
        </>
    );
}

export default App
