/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { getAllTags, createTag, deleteTag } from '../utils/data/TagsData';

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState('');

  const fetchData = async () => {
    try {
      const tagsData = await getAllTags();
      setTags(tagsData);
    } catch (error) {
      console.error('Error fetching tags:', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleCreateTag = async (e) => {
    e.preventDefault();
    try {
      const tag = { label: newTag };
      await createTag(tag);
      setNewTag('');
      fetchData();
    } catch (error) {
      console.error('Error creating tag:', error.message);
    }
  };

  const handleDeleteTag = async (tagId) => {
    try {
      await deleteTag(tagId);
      fetchData();
    } catch (error) {
      console.error('Error deleting tag:', error.message);
    }
  };

  return (
    <div id="tags">
      <div className="tags-container">
        <div className="tag-container">
          <div className="tags-title">
            <br /><h1>Tags</h1><br />
          </div>
          {tags.map((tag) => (
            <div key={tag.id} className="tag-item">
              <div className="tag-icons">
                <img src="update.png" alt="edit" title="edit" height="20px" />
                <button
                  type="button"
                  id="deletetag"
                  onClick={() => handleDeleteTag(tag.id)}
                  aria-label="Delete Tag"
                >
                  <img src="del.png" alt="delete" height="20px" />
                </button>
              </div>
              <div className="tag-label">{tag.label}</div>
            </div>
          ))}
        </div>
        <div className="create-tag">
          <h2>Create A New Tag</h2>
          <form onSubmit={handleCreateTag}>
            <input
              type="text"
              placeholder="Enter new tag"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
            /><br /><br />
            <button type="submit" id="tagsubmit">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tags;
