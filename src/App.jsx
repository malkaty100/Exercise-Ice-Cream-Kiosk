import { useState } from "react";
import Header from "../components/Header";
import FlavorList from "../components/FlavorList";
import OrderSummary from "../components/OrderSummary";
import NoticeArea from "../components/NoticeArea";
import './App.css'
function App() {
  const [flavors,setFlavors]=useState([ 
    { name: "Vanilla", isSoldOut: false, scoopsSelected: 0 },
  { name: "Chocolate", isSoldOut: false, scoopsSelected: 0 },
  { name: "Strawberry", isSoldOut: true, scoopsSelected: 0 },
  { name: "Pistachio", isSoldOut: false, scoopsSelected: 0 }])
  const [showOnlyAvailable,setShowOnlyAvailable]=useState(false)
  const [scoopLimit,setScoopLimit]=useState(5)
  let sumScoop=0
  
  flavors.map(i=>sumScoop+=i.scoopsSelected)
  return (  <>
  <Header/>
  <label for="showOnlyAvailable">show only available</label>
  <input type='checkbox'id="showOnlyAvailable" onChange={()=>{setShowOnlyAvailable(!showOnlyAvailable)}}/>
  {sumScoop>=scoopLimit&&<NoticeArea message="Scoop limit reached"/>}
  <div className="container">
  {!showOnlyAvailable||flavors.find(i=>!i.isSoldOut)?(flavors.map((item,key)=><FlavorList name={item.name} scoopsSelected={item.scoopsSelected} key={key} isSoldOut={item.isSoldOut} totalScoops={sumScoop} setFlavors={setFlavors} limit={scoopLimit} showOnlyAvailable={showOnlyAvailable}/>)):<NoticeArea message="No flavors to show"/>}
  </div>
  <button onClick={()=>{
    setFlavors(prev=>prev.map((f)=> ({...f,scoopsSelected:0})))

  }}>clear order</button>
  <p>order summary {!sumScoop&&<NoticeArea message="your order is empty"/>}</p>
   <OrderSummary totalScoops={sumScoop} price={sumScoop*5}/>
  </>);
}

export default App;