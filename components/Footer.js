function Footer() {
  return (
    <div className="flex items-center bg-black">
      <div className="flex-1 mx-auto px-8 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-6 md:gap-4">
          <div className="md:col-span-4 rounded-lg shadow-xl h-auto text-white font-Montserrat text-xs">
            LEGALES Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="md:col-span-2 rounded-lg shadow-xl flex justify-end">
            <a href="#">
              <img
                className="max-w-[188px] md:max-w-[188px] xl:max-w-[188px]"
                src="/images/logo.png"
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
