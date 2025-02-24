import React,{useState,useEffect} from 'react';
import axios from "axios"
import { groceriesData } from '../assets/data';
import "../styles/Groceries.css";

const Groceries = () => {
  const [groceriesData,setGroceriesData] = useState([])
  const api = import.meta.env.VITE_BACKEND

  useEffect(()=>{
    const fetchGroceries = async()=>{
      try{
        const response = await axios.get(`${api}/api/grocery/`)
        setGroceriesData(response.data)
      }
      catch(err){
        console.log(err.message)
      }
    }
    fetchGroceries()
  },[])
  return (
    <div className='groceries'>
      {groceriesData.map((grocery, index) => (
        <div className='groceries__item' key={index}>
          <img src={grocery.img} alt={grocery.title} className='groceries__item-img' />
          <div className='groceries__item-content'>
            <h3 className='groceries__item-title'>{grocery.title}</h3>
            <p className='groceries__item-offer'>{grocery.offer}</p>
            <button className='groceries__item-btn'>
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Groceries;

// import React from 'react'
// import { groceriesData } from '../assets/data'
// import "../styles/Groceries.css"
// const Groceries = () => {
//   return (
// <div className='groceries'>
//       {groceriesData.map((grocery, index) => (
//         <div className='groceries1' key={index}>
//           <img src={grocery.img} alt="" />
//           <div className='groceries-content'>
//             <h3>{grocery.title}</h3>
//             <p>{grocery.offer}</p>
//             <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Groceries
