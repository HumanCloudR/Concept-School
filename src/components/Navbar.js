import '../App.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdyu6tU2FZF9MWGXQ81IijsrG4ud5gOCuhuA&s" alt="Logo" className="school-logo" />
        <div className="logo-text-container">
          <span className="logo-line">CONCEPT</span>
          <span className="logo-line">SCHOOL</span>
        </div>
      </div>
      <div className="user-icon">
        <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="User" />
      </div>
    </nav>
  );
}

export default Navbar;
