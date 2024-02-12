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

const createTag = async (tag) => {
  try {
    const response = await fetch('https://localhost:7110/tags', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tag),
    });
    if (!response.ok) {
      throw new Error('Failed to create a new tag!');
    }
    const createdTag = await response.json();
    return createdTag;
  } catch (error) {
    console.error('Error creating tag:', error.message);
    throw error;
  }
};

const deleteTag = async (tagId) => {
  try {
    const response = await fetch(`https://localhost:7110/tags/${tagId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete tag!');
    }

    const deletedTag = await response.json();
    return deletedTag;
  } catch (error) {
    console.error('Error deleting tag:', error.message);
    throw error;
  }
};

export { getAllTags, createTag, deleteTag };
