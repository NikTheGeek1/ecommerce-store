import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product | null> => {
    try {
        const res = await fetch(`${URL}/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching product", error);
        return null;
    }
};

export default getProduct;