import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import ginger from './Assets/Ginger.png'; // with import

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <h1>A heading was necessary.</h1>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Isabel layland was here.
            </p>
            <p>Hello World!</p>
            <img src={ginger} alt="Something cursed. Something lost."></img>
            <ul>
                <li>
                    Ginger Root and its entire family were cursed to turn into
                    trees.
                </li>
                <li>
                    The only one who is yet to be fully lost to this curse is
                    Ginger Root.
                </li>
                <li>But the curse only grows in strength.</li>
            </ul>
            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                    style={{ background: "red" }}
                >
                    Log Hello World
                </Button>
            </div>
        </div>
    );
}

export default App;
