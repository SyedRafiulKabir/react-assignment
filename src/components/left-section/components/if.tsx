import React from "react";

interface IfProps {
    children: React.ReactNode;
    condition: boolean;
}

const If = ({ children, condition }: IfProps) => {
    if (!condition) return null;

    return <div>{children}</div>;
};

export default If;
