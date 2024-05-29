import Carts from "../Carts/Carts";
import { CiBookmarkPlus } from "react-icons/ci";

const Blog = ({ blog,handleBookmarks,handleAddTime }) => {
  const {id, author_name,cover_photo,author_pic,title,hashtag,reading_time,posted_date } = blog;

  return (
    <div>
      <div className=" my-4 py-4 bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-80 rounded-md"
            src={cover_photo}
            alt="Author"
          />
        </figure>
        <section className="flex justify-between items-center">
            <div className="flex p-4"> 
            {/* pic & author name containing div  */}
                <div>
                    <img className="w-12 rounded-full" src={author_pic} alt="Author_pic"  />
                </div>
                <div className="pl-2">
                    <h2 className="font-bold">{author_name} </h2>
                    <p>{posted_date} </p>
                </div>
            </div>

            <div className="flex">
              <p className="pr-2"> Reading time: {reading_time} min </p>
              <button onClick={()=> handleBookmarks(blog)} className="text-red-600 text-2xl font-bold pr-2"><CiBookmarkPlus></CiBookmarkPlus> </button>
            </div>
        </section>
        <div className="text-start pl-4" >
          <h2 className="text-2xl font-bold">{title} </h2>
          <p>{
                hashtag.map((hash,idx) => <span key={idx}>#{hash} </span> )
            } 
          </p>
            <button onClick={()=> handleAddTime(reading_time,id)}
            className="text-base text-blue-700 underline">Mark as read</button>
        </div>
      </div>
      
    </div>
  );
};

export default Blog;
