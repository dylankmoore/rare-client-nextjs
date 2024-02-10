const getAllTags = async () => {
  try {
    const response = await fetch('https://localhost:7110/tags');
    if (!response.ok) {
      throw new Error('Failed to fetch tags');
    }
    const tags = await response.json();
    return tags;
  } catch (error) {
    console.error('Error fetching tags:', error.message);
    return [];
  }
};

export default getAllTags;
