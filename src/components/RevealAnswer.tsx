import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [active, setValue] = useState<boolean>(false);
    return <div><span>
                <Button onClick={() => {setValue(!active)} }>Reveal Answer</Button>
                <br></br>
                {active?"42":""}
            </span></div>;
}
