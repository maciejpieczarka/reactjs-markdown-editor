import React from 'react';

import Footer from './components/Footer/Footer';
import Generator from './pages/Generator/Generator';
import Error from './pages/Error/Error';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="app">
            {/* Routes for different pages */}
            <Routes>
                <Route path="*" element={<Error />} />
                <Route path="/" element={<Generator />} />
            </Routes>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default App;
