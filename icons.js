// ไอคอนแอปแบบ SVG (viewBox 60x60) — แก้สี/รูปทรงได้ที่นี่
const sv=(d,b)=>`<svg viewBox="0 0 60 60"><defs>${b}</defs>${d}</svg>`;
const lg=(id,a,c)=>`<linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${c}"/></linearGradient>`;
const ICON={
phone:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><path fill="#fff" d="M19 13c-3 1-5 4-4 9 3 12 11 20 22 23 5 1 8-1 9-4l-1-5-7-2-3 3c-4-2-8-6-10-10l3-3-2-7z"/>`,lg('a','#67e47c','#1fb83e')),
safari:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><circle cx="30" cy="30" r="22" fill="#fff" stroke="#b9c6d6" stroke-width="2"/><path d="M37 23l-14 7-3 7 7-3 7-14z" fill="#ff3b30"/><path d="M23 30l-3 7 7-3 3-4z" fill="#ddd"/>`,lg('a','#4ab4ff','#0a6df0')),
sms:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><path fill="#fff" d="M30 13c-11 0-19 7-19 16 0 5 3 9 7 12-1 3-3 5-5 7 5 0 9-2 11-4h6c11 0 19-7 19-15S41 13 30 13z"/>`,lg('a','#67e47c','#1fb83e')),
music:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><path fill="#fff" d="M41 12L24 16v20a6 6 0 1 0 4 6V24l9-2v10a6 6 0 1 0 4 6z"/>`,lg('a','#ff6a7e','#ef2a3f')),
health:()=>sv(`<rect width="60" height="60" fill="#fff"/><path d="M30 48C14 36 12 28 12 23a9 9 0 0 1 18-2 9 9 0 0 1 18 2c0 5-2 13-18 25z" fill="url(#a)"/>`,lg('a','#ff5e8a','#ff2d55')),
cam:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><circle cx="30" cy="30" r="17" fill="#222"/><circle cx="30" cy="30" r="12" fill="#0d1230"/><circle cx="26" cy="26" r="4" fill="#6fa8ff" opacity=".8"/>`,lg('a','#d8d8dc','#8b8b92')),
photos:()=>sv(`<rect width="60" height="60" fill="#fff"/>${['#ff9500','#ffcc00','#34c759','#32ade6','#5856d6','#af52de','#ff2d55','#ff6b35'].map((c,i)=>`<ellipse cx="30" cy="19" rx="8" ry="11" fill="${c}" opacity=".78" transform="rotate(${i*45} 30 30)"/>`).join('')}`,''),
ig:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><rect x="14" y="14" width="32" height="32" rx="10" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="30" cy="30" r="8" fill="none" stroke="#fff" stroke-width="3.5"/><circle cx="40" cy="20" r="2.4" fill="#fff"/>`,`<radialGradient id="a" cx=".25" cy="1" r="1.2"><stop offset="0" stop-color="#fdf497"/><stop offset=".25" stop-color="#fd5949"/><stop offset=".6" stop-color="#d6249f"/><stop offset="1" stop-color="#285aeb"/></radialGradient>`),
line:()=>sv(`<rect width="60" height="60" fill="#5cc860"/><path fill="#fff" d="M30 12c-11 0-19 7-19 16 0 8 7 14 16 15l-1 5 7-5c6-2 10-7 10-14 0-9-8-17-13-17z"/><text x="30" y="33" font-size="10" font-weight="800" text-anchor="middle" fill="#5cc860">LINE</text>`,''),
yt:()=>sv(`<rect width="60" height="60" fill="#fff"/><rect x="6" y="15" width="48" height="30" rx="9" fill="#f00"/><path d="M26 23l11 7-11 7z" fill="#fff"/>`,''),
set:()=>sv(`<rect width="60" height="60" fill="url(#a)"/><circle cx="30" cy="30" r="15" fill="none" stroke="#4a4a50" stroke-width="9" stroke-dasharray="6 4.9"/><circle cx="30" cy="30" r="11" fill="#5b5b62"/><circle cx="30" cy="30" r="5" fill="#d0d0d4"/>`,lg('a','#c9c9ce','#8e8e93'))
};
