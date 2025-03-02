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
    <div className='groceries w-100 d-flex align-items-center justify-content-between'>
      {groceriesData.map((grocery, index) => (
        <div className='groceries__item w-100 position-relative ' key={index}>
          <img src={grocery.img} alt={grocery.title} className='groceries__item-img rounded-3 object-fit-cover w-100' />
          <div className='groceries__item-content position-absolute'>
            <h3 className='groceries__item-title m-0 '>{grocery.title}</h3>
            <p className='groceries__item-offer m-0 text-secondary fw-semibold'>{grocery.offer}</p>
            <button className='groceries__item-btn btn btn-dark mt-2 px-2 py-1 fs-6 fw-semibold '>
              Shop Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Groceries;