import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Element, scroller } from 'react-scroll';
import './App.css';
import ProductList from './components/ProductList';
import Slideshow from './Slideshow';
import ContactUs from './components/ContactUs';
import aboutImage from './images/about-us.jpg';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Header() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = React.useState(0); // Cart count state

  // Function to handle scrolling to section
  const handleScrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      smooth: true,
      duration: 600, // Adjust the scroll speed (milliseconds)
      offset: -120, // Increase this value to scroll further up from the target
    });
  };

  // Function to handle navigation with scroll
  const handleNavigation = (path, sectionName) => {
    navigate(path, { replace: true });

    // Use a timeout to ensure scroll happens after navigation
    setTimeout(() => {
      handleScrollToSection(sectionName);
    }, 200);
  };

  // Mock function to simulate adding items to the cart
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <div className="navbar">
          <Link to="/" onClick={() => handleNavigation('/', 'home')}>בית🐝</Link>
          <Link to="/" onClick={() => handleNavigation('/', 'products')}>מוצרים🍯</Link>
          <Link to="/" onClick={() => handleNavigation('/', 'about')}>קצת עלינו🌸</Link>
          <Link to="/" onClick={() => handleNavigation('/', 'contact')}>צרו קשר🧇</Link>
          <Link to="/cart" onClick={() => handleNavigation('/cart', 'cart')} className="cart-link">
            עגלה🛒
            {cartCount > 0 && (
              <span className="cart-count">{cartCount}</span> // Display cart count
            )}
          </Link>
        </div>
        <h1 className="header-title">דבש האילן</h1>
      </div>
    </header>
  );
}

function MainPage() {
  return (
    <>
      <Element name="home">
        <div> {/* Home section if needed */} </div>
      </Element>
      <Element name="products">
        <ProductList />
      </Element>
      <Element name="about">
        <div className="AboutUs">
          <h2>קצת עלינו</h2>
          <img src={aboutImage} alt="About Us" className="about-image" />
          <p>
            עלינו: אצלנו במושב אליקים, תהנו מדבש איכותי וטהור, שלא עבר חימום או
            עיבוד, הישר מפרחי הבר של המרחב הביוספרי של רמות מנשה. הדבש שלנו נאסף
            בקפידה מהפרחים הפראיים שמסביבנו, מה שמבטיח את הטעמים העשירים
            והטבעיים ביותר. המתיקות והאיכות של הדבש שלנו מגיעות מהשדה ישירות
            אליכם, עם דגש על שמירה על תהליך פשוט וטבעי. כל בקבוק דבש מהחווה שלנו
            משקף את האופי הייחודי של אזור רמות מנשה ואת האהבה שלנו לייצור דבש
            איכותי. אנו משפחה קטנה ומסורה שמחויבת להביא לכם דבש איכותי ובלתי
            מעורבב, ולתמוך בקיימות ותחזוקה טבעית של הכוורות שלנו.
          </p>
        </div>
      </Element>
      <Element name="contact">
        <ContactUs />
      </Element>
      <Element name="cart">
        <CartPage />
      </Element>
    </>
  );
}

export default App;
