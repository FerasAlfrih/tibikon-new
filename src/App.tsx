import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {HomePage} from "./Pages/Home";
import {ThemeProvider} from "react-bootstrap";
import {AntiochGuide} from "./Pages/AntiochGuide";
import {EasterNetwork} from "./Pages/EasterNetwork";
import {DailyReadings} from "./Pages/DailyReadings";

function App() {
    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div className="App">
                <Router>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/guide" element={<AntiochGuide/>}/>
                        <Route path="/network" element={<EasterNetwork/>}/>
                        <Route path="/daily/readings" element={<DailyReadings/>}/>
                        {/*<Route path={`/@:id`} element={<ProfilePage/>}/>*/}
                        {/*<Route path={`/:id`} element={<CategoryPage/>}/>*/}
                        {/*<Route path="/error" element={<NotFoundPage/>}/>*/}
                        {/*<Route path={'/login'} element={<LoginPage/>}/>*/}
                        {/*<Route path={'/logout'} element={<LogoutPage/>}/>*/}
                    </Routes>
                </Router>
            </div>

        </ThemeProvider>
)
    ;
}

export default App;
