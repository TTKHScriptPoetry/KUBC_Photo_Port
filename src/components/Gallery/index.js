import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';

// // Non-explicit version
// function Gallery(currentCategory) {
//   const { name, description } = currentCategory;  // Destructure the name and description properties from currentCategory.
//   return (
//     <section>
//         <h1>{capitalizeFirstLetter(name)}</h1>
//         <p>{description}</p>
//         <PhotoList category={currentCategory.name} />
//     </section>
//   );
// }

// Utilize props since Gallary is signaled to be child of App.js
function Gallery(props) {
  // const currentCategory = {
  //   name: "commercial",
  //   description:
  //     "Photos of grocery stores, food trucks, and other commercial projects",
  // };
  const { currentCategory } = props;
  return (
    <section>
      <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
      <PhotoList category={currentCategory.name} />
    </section>
  );
}

export default Gallery;