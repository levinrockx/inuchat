import { CSSProperties } from "react";

export type FlexContainerProps = {
    justifyContent?: CSSProperties['justifyContent'];
    direction?: CSSProperties['flexDirection'];
    alignItem?: CSSProperties['alignItems'];
    children: React.ReactNode;
    className?: string;
    gap?: number;
};