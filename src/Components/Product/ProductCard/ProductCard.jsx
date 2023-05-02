import React from 'react';
import "./ProductCard.css";
import{useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, title2, image, price ,selling_price,color,disscount} = product;
  const navigate= useNavigate();

  const handleNavigate=()=>{
    navigate(`/product/${product.title}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] h-[] border m-3 transition-all cursor-pointer'>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src={image} alt="" />
    </div>
    <div className='textPart bg-white p-3'>
        <div>
            <p className='font-bold opacity-60'>{title}</p>
        <p  className=''>{title2.length>30?title2.substring(0,25)+"...":title2}</p>
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>{price}</p>
            <p className='opacity-50 line-through'>{selling_price}</p>
            <p className='text-green-600 font-semibold'>{disscount}</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
