const Navbar = () => {
  return (
    <nav className=" p-8 fixed w-full top-0">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold border-2 p-2  px-6 rounded-3xl text-xl">
            LET'S TALK
          </div>

          <div className="text-white font-bold text-3xl p-4">TIMES TWO</div>
          
          <div className="text-white font-bold border-2 p-2 w-[15%]   rounded-3xl text-xl">
            <marquee >
            WHAT WE HAVE BEEN UP TO
            </marquee>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
