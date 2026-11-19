import styles from'./flavorList.module.css'
function FlavorList(props) {
    const {name,scoopsSelected,isSoldOut,totalScoops,setFlavors,limit,showOnlyAvailable}=props
    const style=isSoldOut?{"backgroundColor":"rgb(228, 181, 189)"}:{"backgroundColor":"rgb(190, 98, 114)"}
    function addScoop(){
      if(!isSoldOut&&totalScoops<limit){
        setFlavors(prev=>{return prev.map((f)=>f.name===name?{...f,scoopsSelected:f.scoopsSelected+1}:f)})
        
    }
    }
    function removeScoop(){
      if(scoopsSelected>0)
         setFlavors(prev=>{return prev.map((f)=>f.name===name?{...f,scoopsSelected:f.scoopsSelected-1}:f)})

    }
    return (<> {(!showOnlyAvailable||!isSoldOut)&&(<div className={styles.card}>
      <h3>{name}</h3>
      <p>{scoopsSelected}</p>
      {isSoldOut&&<><span className={styles.soldOut}>sold out</span><br></br></>}
      <button style={style} className={styles.btn} disabled={isSoldOut} onClick={()=>{addScoop()}}>+</button>
      <button  style={style} className={styles.btn} disabled={isSoldOut} onClick={()=>{removeScoop()}}>-</button>

    </div>) }</>);
}

export default FlavorList;