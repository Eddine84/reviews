import { useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";
import reviews from "./data";

const App = () => {
  const [index, setIndex] = useState(0);
  const { id, image, name, job, text } = reviews[index];

  // const checkNumber = (number) => {
  //   if (number > reviews.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return reviews.length - 1;
  //   }

  //   return number;
  // };

  const nextPerson = () => {
    setIndex((prevIndex) => {
      const currentIndex = (prevIndex + 1) % reviews.length;

      //return checkNumber(currentIndex);
      return currentIndex;
    });
  };

  const prevPerson = () => {
    setIndex((prevIndex) => {
      const currentIndex = (prevIndex - 1 + reviews.length) % reviews.length;
      //return checkNumber(currentIndex);
      return currentIndex;
    });
  };

  const chooseRandom = () => {
    const randomPerson = Math.floor(Math.random() * reviews.length);
    setIndex(randomPerson);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button className="prev-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={chooseRandom}>
          suprise me
        </button>
      </article>
    </main>
  );
};
export default App;
