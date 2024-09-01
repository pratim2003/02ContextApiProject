import React ,{useState,useContext,createContext} from "react"

export const Theme = createContext({
    bgTheme : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

export const ThemeMaker = Theme.Provider

export default function ChangeTheme(){
    return useContext(Theme)
}