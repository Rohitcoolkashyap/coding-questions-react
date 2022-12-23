import { useContext, useState } from "react";
import { Posts } from "./SearchFilter";

export default function DisplayPosts() {
  const { filteredList, setFilteredList, users } = useContext(Posts);

  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    let searchWord = e.target.value;
    setSearchText(searchWord);
    let updatedList = [...filteredList];
    updatedList = updatedList.filter((text) =>
      text.name.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (searchWord) setFilteredList(updatedList);
    else setFilteredList(users);
  };

  return (
    <input
      type="text"
      value={searchText}
      onChange={handleSearch}
      placeholder="Type Here..."
      style={{ padding: 15, width: 300, fontSize: 18 }}
    />
  );
}
