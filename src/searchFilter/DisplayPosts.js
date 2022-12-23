import { useContext } from "react";
import { Posts } from "./SearchFilter";

export default function DisplayPosts() {
  const { filteredList } = useContext(Posts);
  // console.log(filteredList);
  return (
    <div className="" style={{ margin: "20px 0px" }}>
      <h1>Names List</h1>
      {filteredList.map((post) => (
        <h1
          key={post.id}
          style={{
            fontSize: "18px",
            textAlign: "center",
            lineHeight: 1.6,
            marginTop: 10,
          }}
        >
          {post.name}
        </h1>
      ))}
    </div>
  );
}
