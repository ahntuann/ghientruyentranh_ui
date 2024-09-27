import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {routes.map((route) => {
                        const Component = route.component;
                        const Layout = route.layout;

                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
