import React, { useState } from "react";

const withLike = (WrappedComponent) => {
  return function WithLike(props) {
    const [likeCounter, setLikeCounter] = useState(0);

    const handleLike = () => {
      setLikeCounter(likeCounter + 1);
    };

    return (
      <WrappedComponent
        {...props}
        likeCounter={likeCounter}
        onLike={handleLike}
      />
    );
  };
};

export default withLike;
