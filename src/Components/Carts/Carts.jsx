import Cart from "../Cart/Cart";


const Carts = ({bookMarks}) => {
   
    return (
        <div className="bg-slate-300 m-8 p-4 rounded-md">
            <h1>BookMaked Blogs : {bookMarks.length} </h1>
            <div>
                {
                    bookMarks.map((bookmark,idk)=><Cart key={idk} bookmark={bookmark} ></Cart> )
                }
            </div>
        </div>
    );
};

export default Carts;