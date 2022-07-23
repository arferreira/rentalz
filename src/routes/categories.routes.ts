import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository



// Endpoint to create categories
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  categoriesRepository.create({ name, description });
  return response.status(201).json({ message: 'Category was success created!' });
});



export { categoriesRoutes };