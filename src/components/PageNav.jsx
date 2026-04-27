import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import { useState } from "react";

function PageNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div>
        <Logo />

        <button onClick={() => setIsOpen((open) => !open)}>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            width="24"
            height="24"
            fill="currentColor"
            display="inline-block"
            overflow="visible"
          >
            <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
          </svg>
        </button>

        <nav>
          <ul>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && (
        <nav>
          <ul>
            <li>
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li>
              <NavLink to="/product">Product</NavLink>
            </li>
            <li>
              <NavLink to="/login" className={styles.ctaLink}>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default PageNav;
