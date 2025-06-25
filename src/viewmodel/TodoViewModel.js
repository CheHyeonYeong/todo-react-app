import { useState, useEffect } from "react";
import { call } from "../service/ApiService";

export default function useTodoViewModel() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    call("/todo", "GET", null).then((response) =>
      setItems(response.data)
    );
  }, []);

  const add = (item) =>
    call("/todo", "POST", item).then((response) =>
      setItems(response.data)
    );

  const remove = (item) =>
    call("/todo", "DELETE", item).then((response) =>
      setItems(response.data)
    );

  const update = (item) =>
    call("/todo", "PUT", item).then((response) =>
      setItems(response.data)
    );

  return {
    items,
    add,
    remove,
    update,
  };
}
