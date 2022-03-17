import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../../StateProvider.js';
import { auth } from '../../firebase';
// The final thingie useStateValue that we get from StateProvider.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue(); //*Our Data Layers used
  const history = useHistory();

  //!This is all u need to do for sign out
  const login = () => {
    if (user) {
      auth.signOut();
    }
    //history.push('/');
  };
  console.log(basket);
  return (
    <nav className="header">
      {/*Logo on the left -> img*/}
      <Link to="/">
      <img
          className="header__logo"
          alt="home-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd1XAXLGrGMDdDywqC4xdKbYtbbd9VN66hF8ey5nmm-oAF-qCj2XrJ_W2wIfHyIHRrkrg&usqp=CAU"
        />
      </Link>

      <div className="header__option" style= {{ marginRight: "-10px" }}>
        <LocationOnOutlinedIcon />
      </div>

      <div className="header__option">
        <span className="header__option1">Hello</span>
        <span className="header__option2">Select Your Address</span>
      </div>

      {/*Search box*/}
      <div className="header__search">
        <select>
          <option>All</option>
        </select>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/*3 Links -> signin orders prime*/}
      <div className="headerNav">
        {/*1st link using-->Link  will not refresh the page href will*/}
        <Link to={!user && '/login'} className="header__link">
          <div onClick={login} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        {/*2nd link*/}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/*3rd link*/}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/*4th link*/}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/*Shopping Basket icon*/}
            <ShoppingBasketIcon />
            {/*Number of items in the basket*/}
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
