import { useState } from "react";

export const useForceUpdate = () => {
    const [update, setUpdate] = useState(0); // integer state
    return () => setUpdate(update => update + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}