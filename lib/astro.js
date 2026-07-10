// Astrologické a numerologické výpočty pro Mapu života.
// Slunce a číslo životní cesty vždy; ascendent jen když známe čas narození
// a místo najdeme v tabulce měst (jinak se v mapě prostě neuvede).

const ZOD = ["Beran","Býk","Blíženci","Rak","Lev","Panna","Váhy","Štír","Střelec","Kozoroh","Vodnář","Ryby"];

// Sluneční znamení podle hranic používaných v Hvězdném kvízu.
function calcSun(m, d) {
  const n = m * 100 + d;
  if (n >= 1222 || n <= 119) return "Kozoroh";
  if (n <= 218) return "Vodnář";
  if (n <= 320) return "Ryby";
  if (n <= 419) return "Beran";
  if (n <= 520) return "Býk";
  if (n <= 620) return "Blíženci";
  if (n <= 722) return "Rak";
  if (n <= 822) return "Lev";
  if (n <= 922) return "Panna";
  if (n <= 1022) return "Váhy";
  if (n <= 1121) return "Štír";
  return "Střelec";
}

// Číslo životní cesty (master čísla 11/22/33 se neredukují).
function calcLifePath(y, m, d) {
  const digits = String(y) + String(m).padStart(2, "0") + String(d).padStart(2, "0");
  let sum = digits.split("").reduce((a, c) => a + Number(c), 0);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split("").reduce((a, c) => a + Number(c), 0);
  }
  return sum;
}

// ── Tabulka měst ČR + SR (normalizovaný název → [lat, lon]) ──
const CITIES = {
  "praha": [50.08, 14.44], "brno": [49.20, 16.61], "ostrava": [49.82, 18.26],
  "plzen": [49.75, 13.38], "liberec": [50.77, 15.06], "olomouc": [49.59, 17.25],
  "ceske budejovice": [48.97, 14.47], "hradec kralove": [50.21, 15.83],
  "usti nad labem": [50.66, 14.03], "pardubice": [50.03, 15.78], "zlin": [49.23, 17.67],
  "havirov": [49.78, 18.44], "kladno": [50.14, 14.10], "most": [50.50, 13.64],
  "opava": [49.94, 17.90], "frydek-mistek": [49.68, 18.35], "frydek mistek": [49.68, 18.35],
  "karvina": [49.85, 18.55], "jihlava": [49.40, 15.59], "teplice": [50.64, 13.82],
  "decin": [50.78, 14.21], "chomutov": [50.46, 13.42], "karlovy vary": [50.23, 12.87],
  "jablonec nad nisou": [50.72, 15.17], "jablonec": [50.72, 15.17],
  "mlada boleslav": [50.41, 14.90], "prostejov": [49.47, 17.11], "prerov": [49.46, 17.45],
  "ceska lipa": [50.69, 14.54], "trebic": [49.21, 15.88], "trinec": [49.68, 18.67],
  "tabor": [49.41, 14.66], "znojmo": [48.86, 16.05], "pribram": [49.69, 14.01],
  "cheb": [50.08, 12.37], "kolin": [50.03, 15.20], "trutnov": [50.56, 15.91],
  "pisek": [49.31, 14.15], "orlova": [49.85, 18.43], "kromeriz": [49.30, 17.39],
  "vsetin": [49.34, 18.00], "sumperk": [49.97, 16.97], "uherske hradiste": [49.07, 17.46],
  "breclav": [48.76, 16.88], "hodonin": [48.85, 17.13], "litomerice": [50.53, 14.13],
  "novy jicin": [49.59, 18.01], "krnov": [50.09, 17.70], "litvinov": [50.60, 13.61],
  "sokolov": [50.18, 12.64], "havlickuv brod": [49.61, 15.58], "chrudim": [49.95, 15.80],
  "strakonice": [49.26, 13.90], "koprivnice": [49.60, 18.14], "zdar nad sazavou": [49.56, 15.94],
  "valasske mezirici": [49.47, 17.97], "klatovy": [49.40, 13.29], "beroun": [49.96, 14.07],
  "kutna hora": [49.95, 15.27], "blansko": [49.36, 16.64], "nachod": [50.42, 16.16],
  "jindrichuv hradec": [49.14, 15.00], "roznov pod radhostem": [49.46, 18.14], "roznov": [49.46, 18.14],
  "bohumin": [49.90, 18.36], "otrokovice": [49.21, 17.53], "zabreh": [49.88, 16.87],
  "melnik": [50.35, 14.47], "brandys nad labem": [50.19, 14.66], "hranice": [49.55, 17.73],
  "uhersky brod": [49.03, 17.65], "ricany": [49.99, 14.65], "dvur kralove": [50.43, 15.81],
  "slany": [50.23, 14.09], "bilina": [50.55, 13.78], "louny": [50.36, 13.80],
  "kadan": [50.38, 13.27], "ostrov": [50.31, 12.94], "benesov": [49.78, 14.69],
  "svitavy": [49.76, 16.47], "kralupy nad vltavou": [50.24, 14.31], "rakovnik": [50.10, 13.73],
  "vyskov": [49.28, 17.00], "cesky tesin": [49.75, 18.63], "kyjov": [49.01, 17.12],
  "pelhrimov": [49.43, 15.22], "jirkov": [50.50, 13.45], "duchcov": [50.60, 13.75],
  "nymburk": [50.19, 15.04], "marianske lazne": [49.96, 12.70], "as": [50.22, 12.19],
  "jicin": [50.44, 15.35], "rokycany": [49.74, 13.59], "ceska trebova": [49.90, 16.44],
  "usti nad orlici": [49.97, 16.39], "turnov": [50.59, 15.16], "vysoke myto": [49.95, 16.16],
  "holesov": [49.33, 17.58], "luhacovice": [49.10, 17.76], "boskovice": [49.49, 16.66],
  "vrchlabi": [50.63, 15.61], "policka": [49.71, 16.27], "humpolec": [49.54, 15.36],
  "susice": [49.23, 13.52], "domazlice": [49.44, 12.93], "tachov": [49.80, 12.63],
  "prachatice": [49.01, 14.00], "cesky krumlov": [48.81, 14.32], "veseli nad moravou": [48.95, 17.38],
  "valasske klobouky": [49.14, 18.01], "bystrice pod hostynem": [49.40, 17.67],
  "chotebor": [49.72, 15.67], "moravska trebova": [49.76, 16.66], "lanskroun": [49.91, 16.61],
  "hlucin": [49.90, 18.19], "bilovec": [49.76, 18.02], "frenstat": [49.55, 18.21],
  "kravare": [49.93, 18.00], "vitkov": [49.77, 17.75], "rychnov nad kneznou": [50.16, 16.27],
  "dobruska": [50.29, 16.16], "vamberk": [50.12, 16.29], "letohrad": [50.04, 16.50],
  // Slovensko
  "bratislava": [48.15, 17.11], "kosice": [48.72, 21.26], "presov": [49.00, 21.24],
  "zilina": [49.22, 18.74], "nitra": [48.31, 18.09], "banska bystrica": [48.74, 19.15],
  "trnava": [48.38, 17.59], "martin": [49.07, 18.92], "trencin": [48.89, 18.04],
  "poprad": [49.06, 20.30], "prievidza": [48.77, 18.62], "zvolen": [48.58, 19.13],
  "povazska bystrica": [49.12, 18.45], "michalovce": [48.76, 21.92], "nove zamky": [47.99, 18.16],
  "spisska nova ves": [48.94, 20.56], "komarno": [47.76, 18.13], "humenne": [48.94, 21.91],
  "levice": [48.22, 18.61], "bardejov": [49.29, 21.28], "ilava": [48.99, 18.24],
  "liptovsky mikulas": [49.08, 19.62], "ruzomberok": [49.08, 19.30], "piestany": [48.59, 17.83],
  "lucenec": [48.33, 19.67], "topolcany": [48.56, 18.17], "trebisov": [48.63, 21.72],
  "cadca": [49.44, 18.79], "dubnica nad vahom": [48.96, 18.17], "dubnica": [48.96, 18.17],
  "rimavska sobota": [48.38, 20.02], "partizanske": [48.63, 18.38], "sala": [48.15, 17.88],
  "vranov nad toplou": [48.89, 21.68], "hlohovec": [48.43, 17.80], "senec": [48.22, 17.40],
  "brezno": [48.80, 19.64], "snina": [48.99, 22.15], "senica": [48.68, 17.37],
  "dolny kubin": [49.21, 19.30], "pezinok": [48.29, 17.27], "malacky": [48.44, 17.02],
  "kezmarok": [49.14, 20.43], "stara lubovna": [49.30, 20.69], "galanta": [48.19, 17.73],
  "skalica": [48.85, 17.23], "myjava": [48.75, 17.57], "puchov": [49.12, 18.33],
  "banovce nad bebravou": [48.72, 18.26], "zlate moravce": [48.39, 18.40],
  "roznava": [48.66, 20.53], "detva": [48.56, 19.42], "sturovo": [47.80, 18.72],
};

function normPlace(s) {
  return String(s || "")
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 -]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Najde město jako podřetězec v místě narození (delší názvy mají přednost).
const CITY_KEYS = Object.keys(CITIES).sort((a, b) => b.length - a.length);
function resolvePlace(place) {
  const n = normPlace(place);
  if (!n) return null;
  for (const key of CITY_KEYS) {
    if (n === key || n.includes(key)) return { lat: CITIES[key][0], lon: CITIES[key][1], match: key };
  }
  return null;
}

// Letní čas ve střední Evropě — aproximace: od r. 1979, duben–říjen → UTC+2, jinak UTC+1.
function tzOffset(y, m) {
  return (y >= 1979 && m >= 4 && m <= 10) ? 2 : 1;
}

// Ascendent (převzato 1:1 z odladěného prototypu Mapy života).
function calcAscendant({ year, month, day, hour, minute, tz, lat, lon }) {
  const UT = hour + minute / 60 - tz;
  let Y = year, M = month;
  if (M <= 2) { Y -= 1; M += 12; }
  const A = Math.floor(Y / 100), B = 2 - A + Math.floor(A / 4);
  const JD = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + day + B - 1524.5 + UT / 24;
  const dd = JD - 2451545.0;
  let GMST = (280.46061837 + 360.98564736629 * dd) % 360;
  GMST = (GMST + 360) % 360;
  const LST = (GMST + lon + 360) % 360;
  const T = dd / 36525;
  const eps = (23.4392911 - 0.0130042 * T) * Math.PI / 180;
  const ramc = LST * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  let asc = Math.atan2(Math.cos(ramc), -(Math.sin(ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps)));
  asc = ((asc * 180 / Math.PI) % 360 + 360) % 360;
  return ZOD[Math.floor(asc / 30)];
}

// Sestaví astro profil ze záznamu v results (birth_date "YYYY-MM-DD", birth_time "HH:MM" | null).
function buildAstro(result) {
  const bd = String(result.birth_date || "");
  const md = bd.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!md) return { ok: false, error: `Nečitelné datum narození: "${bd}"` };
  const year = +md[1], month = +md[2], day = +md[3];

  const out = {
    ok: true,
    year, month, day,
    sun: calcSun(month, day),
    lifePath: calcLifePath(year, month, day),
    ascendant: null,
  };

  const mt = String(result.birth_time || "").match(/^(\d{1,2}):(\d{2})/);
  const place = resolvePlace(result.birth_place);
  if (mt && place) {
    out.ascendant = calcAscendant({
      year, month, day,
      hour: +mt[1], minute: +mt[2],
      tz: tzOffset(year, month),
      lat: place.lat, lon: place.lon,
    });
  }
  return out;
}

function calcAge(year, month, day, now = new Date()) {
  let a = now.getFullYear() - year;
  if (now.getMonth() + 1 < month || (now.getMonth() + 1 === month && now.getDate() < day)) a -= 1;
  return a;
}

module.exports = { buildAstro, calcAge, calcSun, calcLifePath, resolvePlace };
