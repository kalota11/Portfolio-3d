const Footer = () => {
  return (
    <footer className="w-full border-t border-white/10 mt-20">

      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-gray-400 text-sm flex flex-col sm:flex-row items-center gap-3">

          <p className="hover:text-white transition cursor-pointer">
            Terms & Conditions
          </p>

          <span className="hidden sm:block">•</span>

          <p className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </p>

        </div>

        <div className="text-white font-semibold text-lg tracking-wide">
          Ebad
        </div>

      </div>

      <div className="text-center text-gray-500 text-xs pb-4">
        © 2026 Ebad Kalota. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;