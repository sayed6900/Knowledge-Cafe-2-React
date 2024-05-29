import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Carts from "../Carts/Carts";
import TimeCount from "../TimeCount/TimeCount";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookMarks, setBookMarks] = useState([])
  const [addTime , setAddTime] = useState(0)

  const handleBookmarks = bookmark =>{
   const newBookmarks = [...bookMarks,bookmark]
   setBookMarks(newBookmarks)
  }

  const handleAddTime = (time,id) =>{
    const newAddedTime= addTime + time
    setAddTime(newAddedTime) 
    const removeBookmark = bookMarks.filter(bookmark => bookmark.id !== id )
    setBookMarks(removeBookmark)
  }

  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="flex">
      <div className="w-2/3">
      
      {blogs.map((blog) => (
        <Blog key={blog.id}
        handleAddTime={handleAddTime}
        handleBookmarks={handleBookmarks}
         blog={blog}></Blog>
      ))}
      </div>
      <div className="flex-1">
        <TimeCount addTime={addTime} ></TimeCount>
        <Carts bookMarks={bookMarks} ></Carts>
      </div>
    </div>
  );
};

export default Blogs;
