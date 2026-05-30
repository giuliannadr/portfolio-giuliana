import { useTranslation } from "react-i18next";

const ITEMS_ES = [
  "FULL STACK DEV", "REACT", "NODE.JS", "TYPESCRIPT", "DISPONIBLE",
  "ANGULAR", "JAVA", ".NET", "OPEN TO WORK", "UNLAM", "BUENOS AIRES", "JUNIOR DEV",
];

const ITEMS_EN = [
  "FULL STACK DEV", "REACT", "NODE.JS", "TYPESCRIPT", "OPEN TO WORK",
  "ANGULAR", "JAVA", ".NET", "AVAILABLE", "UNLAM", "BUENOS AIRES", "JUNIOR DEV",
];

const SEP = <span className="mx-5 text-white/25 font-black text-[10px]">✦</span>;

export const Marquee = () => {
  const { i18n } = useTranslation();
  const items = i18n.language === "en" ? ITEMS_EN : ITEMS_ES;

  const content = (
    <span className="flex items-center whitespace-nowrap">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span
            className="font-black uppercase tracking-[0.25em] text-white text-[10px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            {item}
          </span>
          {SEP}
        </span>
      ))}
    </span>
  );

  return (
    <div className="bg-[#CC1500] py-3.5 overflow-hidden" aria-hidden>
      <div className="ticker-track flex">
        {content}{content}{content}{content}
      </div>
    </div>
  );
};
