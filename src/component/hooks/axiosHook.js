import axios from "axios";
import { useContext } from 'react';
import { PaginationContext } from "../context/pagination"

const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";

const useAjax = () => {

  const paginationContext = useContext(PaginationContext);

  const _addItem = async (item) => {
    item.due = new Date();
    const results = await axios.post(todoAPI, item);
    paginationContext.setItems([...paginationContext.items, ...results.data]);
  };

  const _toggleComplete = async (id) => {
    let item = paginationContext.items.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

      const results = await axios.put(url, item);
      paginationContext.setItems(
        paginationContext.items.map((listItem) =>
          listItem._id === item._id ? results.data : listItem
        )
      );
    }
  };

  const _getTodoItems = () => {
    async function fetchData() {
      const results = await axios.get(todoAPI);
      paginationContext.setItems([...results.data.results]);
    }

    fetchData();
  };


  const deleteTodo = async (id) => {
    let item = paginationContext.items.find((i) => i._id === id) || {};

    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;

      const results = await axios.delete(url);
      paginationContext.setItems(paginationContext.items.filter((listItem) =>
        listItem._id !== results.data._id
      ));    
    }
  };

  return [paginationContext.items, _addItem, _toggleComplete, _getTodoItems, deleteTodo];
};

export default useAjax;