import { Link, useLocation } from "react-router-dom";
import { bottombarLinks } from "@/constants";

const Bottombar = () => {
  const { pathname } = useLocation();

  return (
    <section className="fixed bottom-0 left-0 w-full bg-dark-2 border-t border-dark-4 flex justify-around items-center h-16 md:hidden z-50">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;

        return (
          <Link
            key={`bottombar-${link.label}`}
            to={link.route}
            className={`flex flex-col items-center justify-center gap-1 p-2 transition-all ${
              isActive ? "rounded-lg bg-primary-500" : ""
            }`}
          >
            <img
              src={link.imgURL}
              alt={link.label}
              width={20}
              height={20}
              className={`${isActive ? "invert-white" : ""}`}
            />
            <p className={`tiny-medium ${isActive ? "text-white" : "text-light-2"}`}>
              {link.label}
            </p>
          </Link>
        );
      })}
    </section>
  );
};

export default Bottombar;
