import React, { useState } from "react";
function Menu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
    return (
      <div className="menu-container">
        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
  
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <div className="dropdown-menu">
            <ol className="menu-list">
                <li>See Favorites</li>
                <li>Dietary Requirements</li>
                <li>Create Meal Plans</li>
            </ol>
          </div>
        )}
      </div>
    );
  }
  export default Menu;
  