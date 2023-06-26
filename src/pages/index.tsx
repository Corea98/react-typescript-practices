import { useState } from 'react'
import CounterFC from '../components/counterFC';

export default function Homepage() {

    const [shouldRenderComponent, setShouldRenderComponent] = useState(true);

    const toggleUnmountComponent = () => {
        setShouldRenderComponent(!shouldRenderComponent);
    }

    return (
        <>
            <button onClick={toggleUnmountComponent}>Toggle mmount/unmount component</button>
            { shouldRenderComponent && <CounterFC /> } 
        </>
    )
}
