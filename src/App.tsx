import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Generator from './Components/Generator';
import Footer from './Components/Footer';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className=" flex flex-col">
            <Generator />
            <Footer />
        </div>
    );
}

export default App;
