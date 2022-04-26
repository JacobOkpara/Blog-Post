import React from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((posts) => (
        <div className="border border-gray-300 shadow-md p-5">
          <h1 className="text-2xl"> {posts.title}</h1>
          <h3>
            {posts.author} - <small> {posts.publishedDate}</small>{" "}
          </h3>
          <p> {posts.content}</p>
          <hr />
        </div>
      ))}
      <h1>List of posts</h1>
    </div>
  );
};

export default Posts;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
