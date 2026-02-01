import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Importamos os ícones específicos que você quer usar
import {
  faInstagram,
  faLinkedin,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="w-full bg-[#282F37] flex items-center justify-between px-10 p-4 text-[#f7f7f7]">
      {/* Ícones Sociais */}
      <ul className="flex gap-4">
        <li className="text-[#FFD133] text-3xl hover:text-[#F7E083] cursor-pointer transition-colors">
          <FontAwesomeIcon icon={faInstagram} />
        </li>
        <li className="text-[#FFD133] text-3xl hover:text-[#F7E083] cursor-pointer transition-colors">
          <FontAwesomeIcon icon={faLinkedin} />
        </li>
        <li className="text-[#FFD133] text-3xl hover:text-[#F7E083] cursor-pointer transition-colors">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </li>
      </ul>

      {/* Copyright */}
      <span className="opacity-70 text-xs [text-shadow:1px_1px_4px_rgba(0,0,0,0.5)]">
        © 2023 BioCalc. Todos os direitos reservados.
      </span>

      {/* Links de navegação */}
      <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-xs text-left [text-shadow:1px_1px_4px_rgba(0,0,0,0.5)]">
        <li className="hover:underline cursor-pointer">Termos de Uso</li>
        <li className="hover:underline cursor-pointer">
          Política de Privacidade
        </li>
        <li className="hover:underline cursor-pointer">Contato</li>
        <li className="hover:underline cursor-pointer">Sobre Nós</li>
      </ul>
    </footer>
  );
}

export default Footer;
