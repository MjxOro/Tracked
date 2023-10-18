import { SvgXml } from "react-native-svg";

export default function Logo() {
  const xml = `<svg width="153" height="202" viewBox="0 0 153 202" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M36 2C37.6 38.8 94.6667 17.3333 123 2L152 72L85.1697 107.272L146 134L80 168L21 134L75 107.595L1 72L36 2Z" fill="#D9D9D9"/>
  <path d="M80 134V168M80 202V168M80 168V105L146 134L80 168ZM80 168L21 134L75 107.595M75 107.595L80 110L152 72L123 2C94.6667 17.3333 37.6 38.8 36 2L1 72L75 107.595Z" stroke="black"/>
</svg>`;
  return <SvgXml xml={xml} />;
}
