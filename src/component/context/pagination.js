// import React, { useState } from "react";

// export const PaginationContext = React.creatContext();

// function PaginationProvider(props) {
//   const [items, setItems] = useState([]);
//   const [numOfItems, setNumOfItems] = useState(3);
//   const [page, setPage] = useState(1);
//   const [sortType, setSortType] = useState(false);

//   const state = {
//     items,
//     setItems,
//     numOfItems,
//     setNumOfItems,
//     page, 
//     setPage,
//     sortType,
//     setSortType
//   };

//   return (
//     <PaginationContext.Provider value={state}>
//       {props.children}
//     </PaginationContext.Provider>
//   );
// }

// export default PaginationProvider;
