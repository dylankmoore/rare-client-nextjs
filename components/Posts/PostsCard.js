import React from 'react';
import PropTypes from 'prop-types';

function PostsCard({ postObj }) {
  return (
    <>
      <div className="cookieCard">
        <p className="cookieHeading">{postObj.title}</p>
        <p className="cookieDescription">{postObj.content}</p>
        <button id={postObj.id} type="button"> Delete </button>
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
};

export default PostsCard;
