import React from "react";

export enum HeaderType {
    H1 = '1',
    H2 = '2',
    H3 = '3',
};

export type HeaderProps = {
    type: HeaderType,
    children: React.ReactNode,
}