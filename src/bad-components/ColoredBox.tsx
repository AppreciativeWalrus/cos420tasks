import React, { useState } from "react";
import { Button } from "react-bootstrap";






export function ColoredBox(): React.JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const DEFAULT_COLOR_INDEX = 0;
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    //const [color, setColor] = useState<string>(COLORS[DEFAULT_COLOR_INDEX]);

    function ColorPreview(): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[colorIndex],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
        );
    }

    function ChangeColor(): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
                //setColor(COLORS[colorIndex]);
            }}
        >
            Next Color
        </Button>
        );
    }

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor></ChangeColor>
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
