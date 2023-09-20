import { Link } from "react-router-dom";

export default function Navigation({ toggleVisibility, menuIsVisible }) {
  return (
    <div
      onClick={toggleVisibility}
      className={menuIsVisible ? "fadeIn" : "fadeOut"}
    >
      {/* Opens/closes navigation based on condition */}
      {menuIsVisible && (
        <nav className="bg-[#6c705f] -mt-2">
          <ul className="mt-2 mx-[auto] mb-[auto] list-none text-center text-[2rem] font-['Katibeh'] font-semibold tracking-[3px] p-0 shadow-[0px_2px_3px_1px_rgba(0,0,0,.2)]">
            <li className="pt-[7px]">
              <Link to="/" className="text-[#f8f8f8] hover:text-[#272525]">
                Home
              </Link>
            </li>
            <li className="pt-[7px]">
              <Link
                to="/services"
                className="text-[#f8f8f8] hover:text-[#272525]"
              >
                Services
              </Link>
            </li>
            <li className="pt-[7px]">
              <Link
                to="/contact"
                className="text-[#f8f8f8] hover:text-[#272525]"
              >
                Contact
              </Link>
            </li>
            <li className="pt-[7px]">
              <Link to="/about" className="text-[#f8f8f8] hover:text-[#272525]">
                About Us
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}