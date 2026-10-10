import { create } from "zustand"

const useUserStore = create()(
    persist(
        (set) => ({
            session: undefined,
            clearSession: () => set({session: undefined}),
            setSession: (session) => set({ session }),
        }),
{
    name: "user-store",
    storage: createJSONStorage(() =>
        localStorage),
},
),

)
