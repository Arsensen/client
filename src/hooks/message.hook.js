import { useCallback } from "react"

export const useMessageErr = ()=>{
    return useCallback((text)=>{
        if(window.M && text){
            window.M.toast({html: text})
        }
    }, [])
}