export default function Navbar() {
  return (
    <nav className="bg-[#001948] p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/images/hei_logo.png" alt="HEI Logo" className="h-10 w-auto" />
        </div>

        <ul className="flex space-x-8 items-center font-medium">
          <li><a href="#accueil" className="text-[#dfa408] hover:underline">ACCUEIL</a></li>
          <li><a href="#actualites" className="text-white hover:text-[#dfa408]">ACTUALITÉS</a></li>
          <li><a href="#bourse" className="text-white hover:text-[#dfa408]">BOURSE D'ÉTUDES</a></li>
          <li><a href="#inscription" className="text-white hover:text-[#dfa408]">INSCRIPTION</a></li>
        </ul>

        <a
          href="#intranet"
          className="bg-[#dfa408] text-white font-semibold px-4 py-2 rounded hover:opacity-90 transition"
        >
          INTRANET
        </a>
      </div>
    </nav>
  );
}
