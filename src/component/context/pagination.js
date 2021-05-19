import React, { useState } from "react";

export const PaginationContext = React.createContext();

function PaginationProvider(props) {
  const [items, setItems] = useState([]);
  const [list, setList] = useState([]);
  const [numOfItems, setNumOfItems] = useState(3);
  const [page, setPage] = useState(1);
  const [sortType, setSortType] = useState(false);
  const [offset, setOffset] = useState(0);
  const [disable, setDisable] = useState(false);

  const state = {
    items,
    setItems,
    list,
    setList,
    numOfItems,
    setNumOfItems,
    page,
    setPage,
    sortType,
    setSortType,
    offset,
    setOffset,
    disable,
    setDisable,
  };

  return (
    <PaginationContext.Provider value={state}>
      {props.children}
    </PaginationContext.Provider>
  );
}

export default PaginationProvider;
