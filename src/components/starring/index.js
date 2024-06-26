import React, { useState } from "react";
import StarIcon from "../../assests/images/image.png";
import StarFillIcon from "../../assests/images/image copy.png";

const Starring = () => {
  const [givenStars, setGivenStars] = useState(0);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <div key={star} className="m-1">
            <img
              src={star <= givenStars ? StarFillIcon : StarIcon}
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setGivenStars(star)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Starring;
