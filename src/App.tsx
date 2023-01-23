import { useState } from 'react';
import reactLogo from './assets/react.svg';
import POIGenerator from './Components/POIGenerator';
import Footer from './Components/Footer';
function App() {
    const [count, setCount] = useState(0);

    return (
        <div className=" flex flex-col">
            <POIGenerator />

            <Footer />
        </div>
    );
}

export default App;
