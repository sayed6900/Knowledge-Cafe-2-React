import profile from '../../../public/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center border-b-2 pb-4 '>
            <h1 className='text-3xl font-bold'>Knowledge Cafe-2 React</h1>
            <img src={profile} alt="pic" />
            
        </div>
    );
};

export default Header;