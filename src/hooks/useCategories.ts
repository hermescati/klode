import categories from "../data/categories";

export interface Category {
  id: number;
  title: string;
  description: string;
}

const useCategories = () => ({ data: categories });

export default useCategories;
