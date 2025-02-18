import React from 'react';
import { featuresData } from '../assets/data';
import "../styles/Features.css";

const Features = () => {
  return (
    <div className='features'>
      {featuresData.map((feature, index) => (
        <div key={index} className='features__item'>
          <i className={`fa-solid ${feature.icon} features__item-icon`}></i>
          <h3 className='features__item-title'>{feature.title}</h3>
          <p className='features__item-description'>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;


// import React from 'react';
// import { featuresData } from '../assets/data';
// import "../styles/Features.css"

// const Features = () => {
//   return (
//     <div className='features'>
//       {featuresData.map((feature, index) => (
//         <div key={index} className='feature'>
//           <i className={`fa-solid ${feature.icon}`}></i>
//           <h3>{feature.title}</h3>
//           <p>{feature.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Features;
