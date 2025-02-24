import React,{useState} from 'react'
import logo from "../src/assets/logo.svg"
import "./App.css"
import megamenu from '../src/assets/menu-banner.jpg'
import slide1 from "../src/assets/slide-1.jpg"
import slide2 from "../src/assets/slide-2.jpg"
import baby from "../src/assets/category-baby-care.jpg"
import Atta from "../src/assets/category-atta-rice-dal.jpg"
import Backery from "../src/assets/category-bakery-biscuits.jpg"
import Meat from "../src/assets/category-chicken-meat-fish.jpg"
import Clean from "../src/assets/category-cleaning-essentials.jpg"
import Beverages from "../src/assets/category-cold-drinks-juices.jpg"
import Dairy from "../src/assets/category-dairy-bread-eggs.jpg"
import Fruits from "../src/assets/category-fruits-vegetables.jpg"
import Instant from "../src/assets/category-instant-food.jpg"
import Pet from "../src/assets/category-pet-care.jpg"
import Snacks from "../src/assets/category-snack-munchies.jpg"
import Tea from "../src/assets/category-tea-coffee-drinks.jpg"
import grocery1 from "../src/assets/grocery-banner.png"
import grocery2 from "../src/assets/grocery-banner-2.jpg"
import daily from '../src/assets/banner-deal.jpg'
import daily1 from "../src/assets/product-img-11.jpg"
import daily2 from "../src/assets/product-img-12.jpg"
import daily3 from "../src/assets/product-img-13.jpg"

import bhujia from "../src/assets/product-img-1.jpg"
import nutrichoice from "../src/assets/product-img-2.jpg"
import star from "../src/assets/product-img-3.jpg"
import lays from "../src/assets/product-img-4.jpg"
import popcorn from "../src/assets/product-img-5.jpg"
import yogurt from "../src/assets/product-img-6.jpg"
import cheese from "../src/assets/product-img-7.jpg"
import cornflakes from "../src/assets/product-img-8.jpg"
import millet from "../src/assets/product-img-9.jpg"
import butter from "../src/assets/product-img-10.jpg"
import uk from "../src/assets/uk.png"
import germany from "../src/assets/germany.png"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className='freshcart'>
      <div className='topbar'>
        <p>Super Value Deals - Save more with coupons</p>
        <div>
          <div className='dropdown languages'>
        <div className='dropdown-heading' style={{display:"flex",alignItems:"center",gap:"5px"}}> <img src={uk} width="20px" alt="" />English <i class="fa-solid fa-angle-down"></i></div>
          <div className='dropdown-options'>
        <p className='dropdown-heading' style={{display:"flex",alignItems:"center",gap:"5px"}}> <img src={uk} width="20px" alt="" />English</p>
        <p className='dropdown-heading' style={{display:"flex",alignItems:"center",gap:"5px"}}> <img src={germany} width="20px" alt="" />Deustch</p>
          </div>
        </div>
        </div>
      </div>
      <div className='searchbar'>
        <>
      {/* Sidebar for Mobile */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='side-top-bar'>
      <img src={logo} alt=""  className='logo logo-mobile'/>
        <div className='close-icon' onClick={toggleSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        </div>
        <div className='navbar-main-sidebar'>
        <div className="navbar-mobile">
  <div className="dropdown">
  <div className='search-input'>
        <input type="input" placeholder='Search for products' className='search'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    <div className="dropdown-heading All-Depts All-Depts-Mobile">
      <i className="fa-solid fa-border-all"></i> All Departments
    </div>
    <div className="dropdown-options All-Depts-options">
      <p>Dairy, Bread & Eggs</p>
      <p>Snacks & Munchies</p>
      <p>Fruits & Vegetables</p>
      <p>Cold Drinks & Juices</p>
      <p>Breakfast & Instant Food</p>
      <p>Bakery & Biscuits</p>
      <p>Chicken, Meat & Fish</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Home <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Home Default</p>
      <p>Home Modern</p>
      <p>Home Creative</p>
      <p>Home Local Store</p>
      <p>Home Minimalist</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Shop <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Stores <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Store List</p>
      <p>Store List</p>
      <p>Store List</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Mega menu <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options megaoptions">
    <div className="menu-column">
        <h4>Dairy, Bread & Eggs</h4>
        <ul>
          <li>Butter</li>
          <li>Milk Drinks</li>
          <li>Curd & Yogurt</li>
          <li>Eggs</li>
          <li>Buns & Bakery</li>
          <li>Cheese</li>
          <li>Condensed Milk</li>
          <li>Dairy Products</li>
        </ul>
      </div>
      <div className="menu-column">
      <h4>Breakfast & Instant Food</h4>
        <ul>
          <li>Breakfast Cereal</li>
          <li>Noodles, Pasta & Soup</li>
          <li>Frozen Veg Snacks</li>
          <li>Frozen Non-Veg Snacks</li>
          <li>Instant Mixes</li>
          <li>Batter</li>
          <li>Fruit and Juices</li>
        </ul>
      </div>
      <div className="menu-column">
      <h4>Cold Drinks & Juices</h4>
        <ul>
          <li>Soft Drinks</li>
          <li>Fruit Juices</li>
          <li>Coldpress</li>
          <li>Water & Ice Cubes</li>
          <li>Soda & Mixers</li>
          <li>Health Drinks</li>
          <li>Herbal Drinks</li>
          <li>Milk Drinks</li>
        </ul>
      </div>
      <div className='menu-column'>
        <img src={megamenu} alt="" className='megamenuimg'/>
        <h2 className='offer'>Dont miss this <br />offer today</h2>
        <button className='offerbtn'>Shop Now</button>
      </div>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Pages <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Blog</p>
      <p>Blog Single</p>
      <p>Blog</p>
      <p>Blog Single</p>
      <p>Blog</p>
      <p>Blog Single</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Account <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Sign in</p>
      <p>Signup</p>
      <p>Forgot Password</p>
      <p>My Account</p>
    </div>
  </div>
  <div className='dropdown'>
    <div className='dropdown-heading'>Dashboard</div>
  </div>
  <div className="dropdown">
    <div className="dropdown-heading">Docs</div>
    <div className="dropdown-options">
      <p>Documentation</p>
      <p>Changelog V1.0.0</p>
    </div>
  </div>
</div>
</div>
      </div>
        </>
        <div className='left'>
        <img src={logo} alt=""  className='logo'/>
        <div className='search-main'>
        <div className='search-input'>
        <input type="input" placeholder='Search for products' className='search'/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <button className='location-btn'><i class="fa-solid fa-location-dot"></i> Location</button>
        </div>
        </div>
        <div className='options'>
        <i class="fa-regular fa-heart options-icon"><span className='options-span'>4</span></i>
        <i class="fa-regular fa-user options-icon"></i>
        <i class="fa-solid fa-bag-shopping options-icon"><span className='options-span'>3</span></i>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={toggleSidebar} viewBox="0 0 16 16" width="32" height="32" fill="#0AAD0A" class="bi bi-text-indent-left text-primary menu-icon"><path d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708M7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path></svg>
        </div>
        </div>
        <div className='navbar-main'>
        <div className="navbar">
  <div className="dropdown">
    <div className="dropdown-heading All-Depts">
      <i className="fa-solid fa-border-all"></i> All Departments
    </div>
    <div className="dropdown-options">
      <p>Dairy, Bread & Eggs</p>
      <p>Snacks & Munchies</p>
      <p>Fruits & Vegetables</p>
      <p>Cold Drinks & Juices</p>
      <p>Breakfast & Instant Food</p>
      <p>Bakery & Biscuits</p>
      <p>Chicken, Meat & Fish</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Home <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Home Default</p>
      <p>Home Modern</p>
      <p>Home Creative</p>
      <p>Home Local Store</p>
      <p>Home Minimalist</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Shop <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
      <p>Shop Grid - Filter</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Stores <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Store List</p>
      <p>Store List</p>
      <p>Store List</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Mega menu <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options megaoptions">
    <div className="menu-column">
        <h4>Dairy, Bread & Eggs</h4>
        <ul>
          <li>Butter</li>
          <li>Milk Drinks</li>
          <li>Curd & Yogurt</li>
          <li>Eggs</li>
          <li>Buns & Bakery</li>
          <li>Cheese</li>
          <li>Condensed Milk</li>
          <li>Dairy Products</li>
        </ul>
      </div>
      <div className="menu-column">
      <h4>Breakfast & Instant Food</h4>
        <ul>
          <li>Breakfast Cereal</li>
          <li>Noodles, Pasta & Soup</li>
          <li>Frozen Veg Snacks</li>
          <li>Frozen Non-Veg Snacks</li>
          <li>Instant Mixes</li>
          <li>Batter</li>
          <li>Fruit and Juices</li>
        </ul>
      </div>
      <div className="menu-column">
      <h4>Cold Drinks & Juices</h4>
        <ul>
          <li>Soft Drinks</li>
          <li>Fruit Juices</li>
          <li>Coldpress</li>
          <li>Water & Ice Cubes</li>
          <li>Soda & Mixers</li>
          <li>Health Drinks</li>
          <li>Herbal Drinks</li>
          <li>Milk Drinks</li>
        </ul>
      </div>
      <div className='menu-column'>
        <img src={megamenu} alt="" className='megamenuimg'/>
        <h2 className='offer'>Dont miss this <br />offer today</h2>
        <button className='offerbtn'>Shop Now</button>
      </div>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Pages <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Blog</p>
      <p>Blog Single</p>
      <p>Blog</p>
      <p>Blog Single</p>
      <p>Blog</p>
      <p>Blog Single</p>
    </div>
  </div>

  <div className="dropdown">
    <div className="dropdown-heading">Account <i class="fa-solid fa-angle-down"></i></div>
    <div className="dropdown-options">
      <p>Sign in</p>
      <p>Signup</p>
      <p>Forgot Password</p>
      <p>My Account</p>
    </div>
  </div>
  <div className='dropdown'>
    <div className='dropdown-heading'>Dashboard</div>
  </div>
  <div className="dropdown">
    <div className="dropdown-heading">Docs</div>
    <div className="dropdown-options">
      <p>Documentation</p>
      <p>Changelog V1.0.0</p>
    </div>
  </div>
</div>
</div>
<div className='slider-container'>
  <div className='slider-wrapper'>
    <div className='slide'>
      <img src={slide1} alt="" />
      <div className='slide-content'>
        <span className='tag'>Opening Sale Discount 10%</span>
        <h2>SuperMarket For Fresh Grocery</h2>
        <p>Introduced a new model for online grocery shopping and convenient home deleivery</p>
        <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
    <div className='slide'>
      <img src={slide2} alt="" />
      <div className='slide-content'>
        <span className='tag'>Free Shipping - orders over $100</span>
        <h2>Free Shipping on orders over <span className="dollars" style={{color:"#0AAD0A"}}>$100</span></h2>
        <p>Free Shipping to First-Time Customers Only, After promotions and discounts are applied. </p>
        <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
  <div className='slider-dots'>
  <span className='dot' onClick="currentSlide(0)"></span>
  <span className='dot' onClick="currentSlide(1)"></span>
</div>
</div>
<div className='slider-cards'>
  <div className='slider-heading'>
  <h2>Featured Categories</h2>
  <div className='slider-btns'>
    <button><i class="fa-solid fa-chevron-left"></i></button>
    <button><i class="fa-solid fa-chevron-right"></i></button>
  </div>
  </div>
  <div className='cards1'>
    <div className='card'>
      <img src={Backery} alt="" />
      <p>Backery & Biscuits</p>
    </div>
    <div className='card'>
      <img src={Instant} alt="" />
      <p>Instant Food</p>
    </div>
    <div className='card'>
      <img src={Tea} alt="" />
      <p>Tea,Coffee & Drinks</p>
    </div>
    <div className='card'>
      <img src={Atta} alt="" />
      <p>Atta, Rice & Dal</p>
    </div>
    <div className='card'>
      <img src={baby} alt="" />
      <p>Baby care</p>
    </div>
    <div className='card'>
      <img src={Meat} alt="" />
      <p>Chicken, Meat & Fish</p>
    </div>
    <div className='card'>
      <img src={Clean} alt="" />
      <p>Cleaning Essentials</p>
    </div>
    <div className='card'>
      <img src={Pet} alt="" />
      <p>Pet Care</p>
    </div>
    <div className='card'>
      <img src={Dairy} alt="" />
      <p>Dairy, Bread & Eggs</p>
    </div>
    <div className='card'>
      <img src={Snacks} alt="" />
      <p>Snacks & Munchies</p>
    </div>
    <div className='card'>
      <img src={Fruits} alt="" />
      <p>Fruits & Vegetables</p>
    </div>
    <div className='card'>
      <img src={Beverages} alt="" />
      <p>Beverages</p>
    </div>
  </div>
</div>
<div className='groceries'>
  <div className='groceries1'>
    <img src={grocery1} alt="" />
    <div className='groceries-content'>
      <h3>Fruits & Vegetables</h3>
      <p>Get Upto 30% off</p>
      <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
  <div className='groceries1'>
    <img src={grocery2} alt="" />
    <div className='groceries-content'>
      <h3>Freshly Baked Buns</h3>
      <p>Get Upto 25% off</p>
      <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  </div>
</div>
<div className='popularproducts'>
  <h2>Popular Products</h2>
  <div className='products'>
    <div className='product'>
      <div className='product-offers'>
      <span className='span1'>Sale</span>
      <span className='span2'>10%</span>
      </div>
      <img src={bhujia} alt="" />
      <div className='product-content'>
        <p className='product-category'>Snack & Munchies</p>
        <h3>Haldirams's Sev Bhujia</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$21.6 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={nutrichoice} alt="" />
      <div className='product-content'>
        <p className='product-category'>Bakery & Biscuits</p>
        <h3>Nutrichoice Digestive</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$24 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span1'>Buy 1 Get $4.00 Off</span>
      </div>
      <img src={star} alt="" />
      <div className='product-content'>
        <p className='product-category'>Bakery & Biscuits</p>
        <h3>Cadbury 5 Star Chocolate</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$35 <span>$36</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span1'>Hot</span>
      <span className='span2'>40%</span>
      </div>
      <img src={lays} alt="" />
      <div className='product-content'>
        <p className='product-category'>Snack & Munchies</p>
        <h3>Onion Flavour Potato</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$3 <span>$5</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span2'>35%</span>
      </div>
      <img src={popcorn} alt="" />
      <div className='product-content'>
        <p className='product-category'>Instant Food</p>
        <h3>Salted Instant Popcorn</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$11.7 <span>$18</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span1'>Buy 1 Get $4.00 Off</span>
      </div>
      <img src={star} alt="" />
      <div className='product-content'>
        <p className='product-category'>Bakery & Biscuits</p>
        <h3>Cadbury 5 Star Chocolate</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$35 <span>$36</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span1'>Sale</span>
      <span className='span2'>10%</span>
      </div>
      <img src={bhujia} alt="" />
      <div className='product-content'>
        <p className='product-category'>Snack & Munchies</p>
        <h3>Haldirams's Sev Bhujia</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$21.6 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span2'>40%</span>
      </div>
      <img src={yogurt} alt="" />
      <div className='product-content'>
        <p className='product-category'>Dairy, Bread & Eggs</p>
        <h3>Blueberry Greek Yogurt</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$14.4 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={cheese} alt="" />
      <div className='product-content'>
        <p className='product-category'>Dairy, Bread & Eggs</p>
        <h3>Britannia Cheese Slices</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$24<span>$26</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span2'>15%</span>
      </div>
      <img src={cornflakes} alt="" />
      <div className='product-content'>
        <p className='product-category'>Instant Food</p>
        <h3>Kellogs's Original Cereals</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$29.5 <span>$34</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={nutrichoice} alt="" />
      <div className='product-content'>
        <p className='product-category'>Bakery & Biscuits</p>
        <h3>NutriChoice Digestive</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$24 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={millet} alt="" />
      <div className='product-content'>
        <p className='product-category'>Snack & Munchies</p>
        <h3>Slurrp Millet Chocolate</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$0 <span>$0</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      <span className='span2'>25%</span>
      </div>
      <img src={butter} alt="" />
      <div className='product-content'>
        <p className='product-category'>Dairy, Bread & Eggs</p>
        <h3>Amul Butter - 500 g</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$13.5 <span>$18</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={nutrichoice} alt="" />
      <div className='product-content'>
        <p className='product-category'>Bakery & Biscuits</p>
        <h3>NutriChoice Digestive</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$24 <span>$24</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
    <div className='product'>
      <div className='product-offers'>
      </div>
      <img src={millet} alt="" />
      <div className='product-content'>
        <p className='product-category'>Snack & Munchies</p>
        <h3>Slurrp Millet Chocolate</h3>
        <p className='product-rating'>★★★★★<span>4.3(4)</span></p>
        <div className='price-cart'>
          <h3>$0 <span>$0</span></h3>
          <button>+ Add</button>
        </div>
      </div>
      <div className='productoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
    </div>
  </div>
</div>
<div className='daily-main'>
<h2>Daily Best Sells</h2>
<div className='DailySells'>
  <div className='daily1'>
  <img src={daily} alt="" />
<div className='dailycontent'>
  <h3>100% Organic Coffee <br /> Beans.</h3>
  <p>Get the best deal before close</p>
  <button>Shop Now <i class="fa-solid fa-arrow-right"></i></button>
</div>
  </div>
  <div className='daily2'>
    <div className='daily2-img'>
    <img src={daily1} alt="" />
    </div>
    <p>Tea, Coffee & Drinks</p>
    <h3>Roast Ground Coffe</h3>
    <div className='price-rating'>
      <h3>$13.5 <span>$18</span></h3>
      <span className='rating'>★★★★★<span>4.5</span></span>
    </div>
    <button className='addtocart'>+ Add To Cart</button>
    <div className='time'>
      <div>1334 <br /><span>Days</span></div>
      <div>23 <br /><span>Hours</span></div>
      <div>3 <br /><span>Mins</span></div>
      <div>20 <br /><span>Secs</span></div>
    </div>
    <div className='dailyoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
  </div>
  <div className='daily2'>
  <div className='daily2-img'>
    <img src={daily2} alt="" />
    </div>
    <p>Tea, Coffee & Drinks</p>
    <h3>Roast Ground Coffe</h3>
    <div className='price-rating'>
      <h3>$13.5 <span>$18</span></h3>
      <span className='rating'>★★★★★<span>4.5</span></span>
    </div>
    <button className='addtocart'>+ Add To Cart</button>
    <div className='time'>
      <div>1334 <br /><span>Days</span></div>
      <div>23 <br /><span>Hours</span></div>
      <div>3 <br /><span>Mins</span></div>
      <div>20 <br /><span>Secs</span></div>
    </div>
    <div className='dailyoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
  </div>
  <div className='daily2'>
  <div className='daily2-img'>
    <img src={daily3} alt="" />
    </div>
    <p>Tea, Coffee & Drinks</p>
    <h3>Roast Ground Coffe</h3>
    <div className='price-rating'>
      <h3>$13.5 <span>$18</span></h3>
      <span className='rating'>★★★★★<span>4.5</span></span>
    </div>
    <button className='addtocart'>+ Add To Cart</button>
    <div className='time'>
      <div>1334 <br /><span>Days</span></div>
      <div>23 <br /><span>Hours</span></div>
      <div>3 <br /><span>Mins</span></div>
      <div>20 <br /><span>Secs</span></div>
    </div>
    <div className='dailyoptions'>
    <i class="fa-regular fa-eye"></i>
    <i class="fa-regular fa-heart"></i>
    <i class="fa-solid fa-arrow-right-arrow-left"></i>
    </div>
  </div>
</div>
</div>
<div className='features'>
  <div className='feature'>
  <i class="fa-solid fa-clock"></i>
    <h3>10 minute grocery now</h3>
    <p>Get your irder delivered to your doorstep at the earliest from FreshCart pickup stores near you.</p>
  </div>
  <div className='feature'>
  <i class="fa-solid fa-gift"></i>
    <h3>Best Prices & Offers</h3>
    <p>Cheaper prices than your local supermarket, great cashback offers to top it off. Get best pricess & offers.</p>
  </div>
  <div className='feature'>
  <i class="fa-solid fa-box"></i>
    <h3>Wide Assortment</h3>
    <p>Choose from 5000+ products across food, personal care, household, bakery, veg and non-veg & other categories.</p>
  </div>
  <div className='feature'>
  <i class="fa-solid fa-rotate"></i>
    <h3>Easy Returns</h3>
    <p>Not satisfied with a product? Return it at the doorstep & get a refund within hours. No questions asked policy .</p>
  </div>
</div>
<footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Vegetables & Fruits</li>
            <li>Breakfast & instant food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li></li>
            <li></li>
            <li>Dairy, bread & eggs</li>
            <li>Cold drinks & juices</li>
            <li>Tea, coffee & drinks</li>
            <li>Masala, oil & more</li>
            <li>Chicken, meat & fish</li>
            <li>Paan corner</li>
            <li>Pharma & wellness</li>
            <li>Home & office</li>
            <li>Pet care</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get to know us</h4>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Our Value</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For Consumers</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Become a Shopper</h4>
          <ul>
            <li>Shopper Oppurtunites</li>
            <li>Become a Shopper</li>
            <li>Earnings</li>
            <li>Ideas & Guides</li>
            <li>New Retailers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Freshcart programs</h4>
          <ul>
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="payment-partners">
          <span>Payment Partners</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Amazon_Pay_logo.png" alt="Amazon Pay" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div>
        <div className="app-links">
          <span>Get deliveries with FreshCart</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Available_on_the_App_Store_%28black%29_SVG.svg/640px-Available_on_the_App_Store_%28black%29_SVG.svg.png" alt="App Store" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div>
      </div>
      <div className='footer-last'>
      <p>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span className="highlight">Codescandy.</span></p>
      <div>Follow us on <i class="fa-brands fa-facebook"></i> <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-instagram"></i></div>
      </div>

    </footer>
<div className='buynow-container'>
<button className='buy-now'><i class="fa-solid fa-cart-shopping"></i> Buy Now</button>
</div>

</div>
  )
}

export default App
