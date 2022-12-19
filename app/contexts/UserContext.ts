import { createContext, useContext } from "react";

const userContext = createContext({
    userData:{
        data:{}
    }
})

export default userContext

export const useUserContext = () => {
    const { userData } = useContext(userContext)
    return userData.data
}