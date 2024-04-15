import { ReactNode } from "react";

export type TopDescriptionProps = {
    title?: string;
    desc1?: string;
    desc2: string;
    img1?: string;
    img2: string;
}

export type HistoryProps = {
    title?: string;
    text?: ReactNode;
    img?: string;
}