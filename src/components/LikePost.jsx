import React from "react";
import withLike from "./withLike";

function LikePost({ likeCounter, onLike }) {
  return (
    <div>
      <button onClick={onLike}>Like Post {likeCounter}</button>
    </div>
  );
}

export default withLike(LikePost);
