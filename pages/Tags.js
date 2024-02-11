/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import getAllTags from '../utils/data/TagsData';

const Tags = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const tagsData = await getAllTags();
      setTags(tagsData);
    };
    fetchData();
  }, []);

  return (
    <div id="tags"><br />
      <div className="tags-title">
        <h1>Tags</h1><br />
      </div>
      <div className="tag-container">
        {tags.map((tag) => (
          <div key={tag.id} className="tag-item">
            <div className="tag-icons">
              <img src="update.png" alt="edit" title="edit" height="20px" />
              <img src="del.png" alt="delete" height="20px" />
            </div>
            <div className="tag-label">{tag.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tags;
