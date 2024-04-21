export type TopDescriptionProps = {
    title?: string;
    desc1?: string;
    desc2: string;
    img1?: string;
    img2: string;
}

export type HistoryTextType = {
    [key: string]: string;
};

export type HistoryProps = {
    title?: string;
    text?: HistoryTextType[];
    img?: string;
};

export type BookProps = {
    slide_img: string,
    slide_txt: string
}