import { create } from "zustand";
import toast from "react-hot-toast";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types";

interface CartStore {
    items: Product[];
    addItem: (item: Product) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;

}

const useCart = create(
    persist<CartStore>((set, get) => (
        {
            items: [],
            addItem: (data: Product) => {
                const currentItems = get().items;
                const existingItem = currentItems.find((item) => item.id === data.id);
                if (existingItem) {
                    return toast("Item already in cart", { icon: "⚠️ 🛒" });
                }
                set({ items: [...get().items, data] });
                toast.success("Item added to cart", { icon: "✅ 🛒" });
            },
            removeItem: (id: string) => {
                const currentItems = get().items;
                const updatedItems = currentItems.filter((item) => item.id !== id);
                set({ items: updatedItems });
                toast.success("Item removed from cart", { icon: "✅ 🛒" });
            },
            removeAll: () => {
                set({ items: [] });
                toast.success("Cart cleared", { icon: "🛒" });
            },
        }
    ),
        {
            name: "cart-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
)

export default useCart;