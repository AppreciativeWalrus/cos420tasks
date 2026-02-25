import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setValue] = useState<number>(-2);
    const [die2, setValue2] = useState<number>(-1);
    
    return (
        <div>Two Dice
            <br></br>
            <span data-testid="left-die">{die1}</span>
            <span data-testid="right-die">{die2}</span>
            <br></br>
            <Button onClick={() => {setValue(d6())} }>Roll Left</Button>
            <Button onClick={() => {setValue2(d6())} }>Roll Right</Button>
            <span>{(die1!=die2?"":
                ((die1 == 1)?"Lose":"Win")
            )}</span>
        </div>

    );
}
