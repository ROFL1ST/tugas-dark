import React from "react";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-full bg-white dark:bg-gray-600 py-4">
      <div className="container mx-auto text-center dark:text-white">
        <p>&copy; {new Date().getFullYear()} LokerIn</p>
      </div>
    </footer>
  );
}

export default Footer;
