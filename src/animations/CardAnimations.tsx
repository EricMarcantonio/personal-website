import React from "react";
import { motion } from "framer-motion";

interface RiseOnHoverProps {
    children: React.PropsWithChildren<React.ReactNode>;
    onClick?: () => void;
}

export const RiseOnHover = ({ children, onClick }: RiseOnHoverProps) => {
    return (
        <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClick}
        >
            {children}
        </motion.div>
    );
};

export const ButtonRiseOnHover = ({ children, onClick }: RiseOnHoverProps) => {
    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {children}
        </motion.button>
    );
};
