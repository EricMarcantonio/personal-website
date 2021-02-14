import { useState } from "react";
import { createContainer } from "unstated-next";

export const container = createContainer(() => {
    const [isDark, setIsDark] = useState(false);
    return {
        isDark,
        setIsDark,
    };
});
