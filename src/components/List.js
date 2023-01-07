import React from 'react';
import ListItems from './ListItems';
//code here
 const List = ({listx}) =>{
  //console.log(listx);
  return(
    
    <>
      {listx.map((list,index) => {
        return <ListItems key={index} valuex={list} />
      })}
    </>
    // <ListItems valuex={i} />
    
  
  )
}

export default List;