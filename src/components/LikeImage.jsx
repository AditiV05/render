import React from "react";
import withLike from "./withLike";

function LikeImage({ likeCounter, onLike }) {
  return (
    <div>
      <button onClick={onLike}>Like Image {likeCounter}</button>
    </div>
  );
}

export default withLike(LikeImage);
