const getAllCategories = async () => {
  try {
    const response = await fetch('https://localhost:7110/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error.message);
    return [];
  }
};

const createCategory = async (category) => {
  try {
    const response = await fetch('https://localhost:7110/categories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(category),
    });
    if (!response.ok) {
      throw new Error('Failed to create a new category!');
    }
    const createdCategory = await response.json();
    return createdCategory;
  } catch (error) {
    console.error('Error creating category:', error.message);
    throw error;
  }
};

const deleteCategory = async (categoryId) => {
  try {
    const response = await fetch(`https://localhost:7110/categories/${categoryId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete category');
    }
  } catch (error) {
    console.error('Error deleting category:', error.message);
    throw error;
  }
};

export { getAllCategories, createCategory, deleteCategory };
