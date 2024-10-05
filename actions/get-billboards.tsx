import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard | null> => {
    try {
        const res = await fetch(`${URL}/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching billboard", error);
        return null;
    }
};

export default getBillboard;