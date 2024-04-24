
import './Navbar.css';

const Navbar = ()=>{
    return (
        <div id="navbar">
            <div className='left'>
                <img src="https://flowbite.com/docs/images/logo.svg" id="log-img"></img>
                <span id="logo-name">GeekFoods</span>
            </div>
            <div className='mid'>
                <ul id="list">
                    <li>Home</li>
                    <li>Quote</li>
                    <li>Resturants</li>
                    <li>Foods</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='right'>
                <button id="btn">Get started</button>
            </div>
        </div>
    )
}

export default Navbar;