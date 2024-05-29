

const TimeCount = ({addTime}) => {
    
    return (
        <div className="bg-slate-200 m-8 p-4 rounded-md ">
            <p className="font-semibold text-blue-600">Spent time on read: {addTime} min</p>
        </div>
    );
};

export default TimeCount;