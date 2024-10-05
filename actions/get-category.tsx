import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category | null> => {
    try {
        const res = await fetch(`${URL}/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching category", error);
        return null;
    }
};

export default getCategory;