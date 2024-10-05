import { create } from "zustand";

import { Product } from "@/types";

interface PreviewModalStore {
    open: boolean;
    data?: Product;
    onOpen: (data: Product) => void;
    onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
    open: false,
    data: undefined,
    onOpen: (data) => set({ open: true, data }),
    onClose: () => set({ open: false, data: undefined }),
}));


export default usePreviewModal;