import { api } from "../api/api"

export const useMessageStore = create((set) => ({
    message: [],
    getMessage: async () => {
        try{
            const res = await api.getMessage()
            set({message: res.data})
        }catch (error) {
            console.error(error)
        }
    }
})