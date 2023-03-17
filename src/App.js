import { useEffect, useState } from "react";
import Header from "./components/header";
import PopularProducts from "./components/popularProducts";
// import cartManagements from "./components/cartMangement";
import axios from "axios";
function App(){
 const[products,setProducts]=useState([]);
 const[cart,setCart]=useState(
 {
  items:[],
  totalQuantity:0,
  totalPrice:0
});
 const fetchData=async()=>{
  const resp=await axios.get("http://localhost:8000/products/all");
  console.log(resp);
  setProducts(resp.data);
  }
  useEffect(()=>{
    fetchData()
  },[])
  
  return(
  <div className='App'>
<Header/>
<PopularProducts products={products} cart={cart} setCart={setCart}/>
{/* <cartManagements products={products} cart={cart} setCart={setCart}/> */}

  </div>
  );
}

export default App;
