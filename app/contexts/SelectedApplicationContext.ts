import React, { createContext, useContext } from "react"

type SelectedApplicationValue = {
    selectData: any
    setSelectData: (v:any)=>void
    isOpen : boolean
    // onOpen : (v:any)=>void
    onOpen : ()=>void
     onClose : ()=>void

}

const SelectedApplicationContext = createContext<SelectedApplicationValue>({

    selectData:null,
    setSelectData: ()=>{},
    isOpen : false,
    onOpen :  ()=>{},
     onClose :  ()=>{},
    

})

const useSelectedApplicationContext = ()=>{
    return useContext(SelectedApplicationContext)
}


export { useSelectedApplicationContext }
export default SelectedApplicationContext