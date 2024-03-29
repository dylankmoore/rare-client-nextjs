import React from 'react';
import PropTypes from 'prop-types';
import { deletePost } from '../../utils/data/PostData';

function PostsCard({ postObj, onUpdate }) {
  const handleDelete = (e) => {
    const { id } = e.target;
    deletePost(id).then(onUpdate);
  };

  return (
    <>
      <div className="cookieCard">
        <p className="cookieHeading">{postObj.title}</p>
        <p className="cookieDescription">{postObj.content}</p>
        <button id={postObj.id} type="button" onClick={handleDelete}> Delete </button>
      </div>
    </>
  );
}

PostsCard.propTypes = {
  postObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default PostsCard;
