import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import NavbarDefault from "./NavbarDefault";
import NavbarFixed from "./NavbarFixed";

function Navbar() {
    const [isScrollPast, setIsScrollPast] = useState(false);

    const handleSclool = () => {
        if (window.scrollY > 400) {
            setIsScrollPast(true);
            console.log("scroll past");
        } else {
            setIsScrollPast(false);
            console.log("scroll not past");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleSclool);
        return () => {
            window.removeEventListener("scroll", handleSclool);
        };
    }, []);

    return (
        <>
            <AnimatePresence>
                {isScrollPast ? (
                    <NavbarFixed Key="navbar-fixed" />
                ) : (
                    <NavbarDefault Key="navbar-default" />
                )}
            </AnimatePresence>
        </>
    );
}
export default Navbar;

