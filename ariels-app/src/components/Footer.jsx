import logo from "../assets/images/logo.png";
export default function Footer() {
  return (
      <footer className="pt-2 flex flex-col items-center shadow-[inset_0_10px_5px_-9px_rgba(0,0,0,.55)]">
        <img
          className="w-[2.5rem] pt-[2px]"
          src={logo}
          alt="Ariel's beauty logo"
        />
        <p className="py-[10px] font-bold font-['inter'] text-xs">
          Beverly Hills ca,00321 | 244-321-555
        </p>
      </footer>
  );
}