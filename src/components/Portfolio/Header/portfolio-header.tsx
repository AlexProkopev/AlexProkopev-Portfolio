import useMediaQuery from "../../../hooks/useMediaQuery";
import NavBar from "./Header-desc/portfolio-navbar-desc";

import NavBarMobile from "./Header-mobile/portfolio-navbar-mobile";

const PortfolioHeader = () => {
const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <header>
      {isMobile ? <NavBarMobile /> : <NavBar />}
    </header>
  );
};

export default PortfolioHeader;