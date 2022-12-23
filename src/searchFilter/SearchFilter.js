import DisplayPosts from "./DisplayPosts";
import Search from "./Search";
import { createContext, useEffect, useState } from "react";

export const Posts = createContext(null);
export default function SearchFilter() {
  const [users, setUsers] = useState([]);
  const [filteredList, setFilteredList] = useState(users);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setFilteredList(json);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  return (
    <div className="" style={{ padding: 20 }}>
      {!isLoading ? (
        <Posts.Provider
          value={{ users, filteredList, setFilteredList, isLoading }}
        >
          <Search />
          <DisplayPosts />
        </Posts.Provider>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
