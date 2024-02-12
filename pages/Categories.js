/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { getAllCategories, createCategory, deleteCategory } from '../utils/data/CategoriesData';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const fetchData = async () => {
    try {
      const categoriesData = await getAllCategories();
      const sortedCategories = categoriesData.sort((a, b) => a.label.localeCompare(b.label));
      setCategories(sortedCategories);
    } catch (error) {
      console.error('Error fetching categories:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      const category = { label: newCategory };
      await createCategory(category);
      setNewCategory('');
      fetchData();
    } catch (error) {
      console.error('Error creating category:', error.message);
    }
  };

  const handleDeleteCategory = async (categoryId) => {
    try {
      await deleteCategory(categoryId);
      fetchData();
    } catch (error) {
      console.error('Error deleting category:', error.message);
    }
  };

  return (
    <div id="categories">
      <div className="categories-container">
        <div className="category-container">
          <div className="categories-title">
            <br /><h1>Categories</h1><br />
          </div>
          {categories.map((category) => (
            <div key={category.id} className="category-item">
              <div className="category-icons">
                <img src="update.png" alt="edit" title="edit" height="20px" />
                <button
                  type="button"
                  id="deletecategory"
                  onClick={() => handleDeleteCategory(category.id)}
                  aria-label="Delete Category"
                >
                  <img src="del.png" alt="delete" title="delete" height="20px" />
                </button>
              </div>
              <div className="category-label">{category.label}</div>
            </div>
          ))}
        </div>
        <div className="create-category">
          <h2>Create A New Category</h2>
          <form onSubmit={handleCreateCategory}>
            <input
              type="text"
              placeholder="Enter new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
            /><br /><br />
            <button type="submit" id="catsubmit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Categories;
