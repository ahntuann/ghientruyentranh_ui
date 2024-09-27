import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';

import routes from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/">Home</Link>
                <Link to="/manga-detail">MangaDetail</Link>

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
