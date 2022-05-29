import { ReactNode } from "react";

export interface Labels {
    lb_save: string;
    lb_delete: string;
}

export interface Language {
    codeLanguage: string;
    labels: Labels;
}

export type Action = {
    type:string
}

export type Props = { children:ReactNode };

export type ContextDispatch = (action:Action) => void;

export type Context = { language:Language };
