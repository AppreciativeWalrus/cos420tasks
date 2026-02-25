import React from "react";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { TwoDice } from "./components/TwoDice";
import { Counter } from "./components/Counter";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>UM COS420 with React Hooks and TypeScript</h1>
            </header>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <br></br>
            <hr />
            <br/>
            <h2>its mad at me for the app not having the stuff from the first web textbook now. Great.</h2>
            <img src="../assets/Ginger.png" alt="The rooted" />
            <Button onClick={ () => { console.log("Hello World!") } } style={{ background: "red" }}>Log Hello World</Button>
            <ul ><li>test</li><li>test</li><li>test</li></ul>
        </div>
    );
}

export default App;
