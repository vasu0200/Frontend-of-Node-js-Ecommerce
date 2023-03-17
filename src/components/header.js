import "../styles/header.css";
import { BsRecycle } from 'react-icons/bs';
import { BsSuitHeart } from 'react-icons/bs';
import { BsFillCartFill } from 'react-icons/bs';
import { MdOutlineAccountCircle } from 'react-icons/md';
const Header =()=>{
    return (
        <div>
            <div className="h1">
                 <ul id="a1">
                    <li>About Us |</li>
                    <li>My Account |</li>
                    <li>Wishlist |</li>
                    <li>OrderTracking</li>
                 </ul>
                 <p><marquee behaviour="slide" direction="up">100% Secure Delivery And Trendy Today</marquee></p>
                 <ul id="a2">
                    <li>Need help? Us:</li>
                    <li>+1258764548451 |</li>
                    <li><select>
                        <option>English</option>
                        <option>Japanes</option>
                        <option>Dutch</option>
                        </select>|</li>

                        <li><select>
                        <option>INR</option>
                        <option>USA</option>
                        <option>UK</option>
                        </select></li>
                 </ul>
                </div>
                <hr/>
                <div className="h2">
                    <img src="https://themepanthers.com/wp/nest/d1/wp-content/uploads/2022/02/logo.png" alt=""/>
                    <div id="b1"><input placeholder="Search For Products..." /><button>Search</button></div>
                    
                    <button id="b3">Became a Vendor &rarr;</button>
                    <ul id="b2">
                    <li><BsRecycle/>Compare</li>
                    <li><BsSuitHeart/>Wishlist</li>
                    <li><BsFillCartFill/>Cart</li>
                    <li><MdOutlineAccountCircle/>Account</li>
                    </ul>
                </div>
                <hr/>
           </div>
           
    )
}
export default Header;