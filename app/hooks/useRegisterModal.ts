import { create } from "zustand";

import { IModalStore } from "./Interface";

const useRegisterModal = create<IModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useRegisterModal