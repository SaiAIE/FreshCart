import React,{useState,useEffect} from 'react';
import axios from "axios"
import { featuresData } from '../assets/data';
import "../styles/Features.css";

const Features = () => {
  const [featuresData,setFeaturesData] = useState([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState("")

  const api = import.meta.env.VITE_BACKEND

  useEffect(()=>{
    const fetchFeatures = async()=>{
      try{
        const response = await axios.get(`${api}/api/features/`)
        setFeaturesData(response.data)
        setLoading(false)
      }
      catch(err){
        console.log(err.message)
        setError("Error Fectching Data")
      }
    }
    fetchFeatures()
  },[])

  {loading && (
    <h2>Loading!!!</h2>
  )}

  {error && (
    <h2>Error!!!</h2>
  )}
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
