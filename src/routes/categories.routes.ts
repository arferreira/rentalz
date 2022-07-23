import { Router } from "express";
import { v4 as uuidV4 } from "uuid";
import { Category } from "../model/Category";


const categoriesRoutes = Router();

const categories: Category[] = [];

// Endpoint to create categories
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category: Category = {
    id: uuidV4(),
    name: name,
    description: description,
    created_at: new Date()
  };

  categories.push(category);

  return response.status(201).json({ categories });
});



export { categoriesRoutes };