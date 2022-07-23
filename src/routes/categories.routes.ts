import { Router } from "express";
import { Category } from "../model/Category";
import { CategoriesRepository } from "../repositories/CategoriesRepository";


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository



// Endpoint to create categories
categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);
  if(categoryAlreadyExists){
    return response.status(400).json({ error: 'Category already exists!' });  
  }
  categoriesRepository.create({ name, description });
  return response.status(201).json({ message: 'Category was success created!' });
});

// Endpoint to list categories
categoriesRoutes.get("/", (request, response) => {
  const categories = categoriesRepository.list();
  return response.status(200).json({ categories });
});



export { categoriesRoutes };