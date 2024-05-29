

const Cart = ({bookmark}) => {
   
    const {title}= bookmark
    return (
        <div className="bg-slate-100 m-2 p-2 rounded-md" >
            <p  >{title} </p>
        </div>
    );
};

export default Cart;