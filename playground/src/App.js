import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import WillItDiffPage from "./Exos/WillItDiff/will-it-diff-page";
import { WasteRenderPage } from "./Exos/WasteRenderGame/waste-render-page";
import { ProfilingToolsPage } from "./Exos/ProfilingTools/profiling-tools-page";
import { WhyBoolTypePage } from "./Exos/WhyBoolType/why-bool-type-page";

const Index = () => <h2>Formation Performance React</h2>;

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="flex flex-row">
                        <Link to="/" className="mh2">
                            Home
                        </Link>
                        <Link to="/waste-render-game/" className="mh2">
                            Waste Render Game
                        </Link>
                        <Link to="/will-it-diff/" className="mh2">
                            (Démo) Will It Diff
                        </Link>
                        <Link to="/profiling-tools/" className="mh2">
                            Profiling tools
                        </Link>
                        <Link to="/why-bool-type/" className="mh2">
                            Why bool is a valid type
                        </Link>
                    </nav>

                    <div className="flex items-center justify-center">
                        <Route path="/" exact component={Index} />
                        <Route
                            path="/waste-render-game/"
                            exact
                            component={WasteRenderPage}
                        />
                        <Route
                            path="/will-it-diff/"
                            exact
                            component={WillItDiffPage}
                        />

                        <Route
                            path="/profiling-tools/"
                            exact
                            component={ProfilingToolsPage}
                        />
                        <Route
                            path="/why-bool-type/"
                            exact
                            component={WhyBoolTypePage}
                        />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
