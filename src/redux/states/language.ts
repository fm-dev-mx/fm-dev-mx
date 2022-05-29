import { Action } from "@/models";
import { languageEn } from "../../languages/language_en";
import { languageEs } from "../../languages/language_es";

export const configLanguage ={
    language:{
        EN:languageEn,
        ES:languageEs
    },
    languageDefault:languageEn
}

export const initialState = {
    codeLanguage:configLanguage.languageDefault.code,
    labels: configLanguage.languageDefault.labels
};



export const languageReducer = (state = initialState, action:Action) => {
    switch(action.type){
        case "ES":
            return{
                codeLanguage:configLanguage.language.ES.code,
                labels:configLanguage.language.ES.labels
            }
        case "EN":
            return{
                codeLanguage:configLanguage.language.EN.code,
                labels:configLanguage.language.EN.labels
            }
        default: return state;
    }
}
