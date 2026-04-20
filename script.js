const days = [
  {
    num:1, day:"Mon", date:"25", month:"May",
    name:"Arrival — Milan & first night",
    sub:"Van pickup · groceries · dinner in Milan",
    photo:"images/Navigli_Milan.jpg",
    wikiCaption:"Navigli canals, Milan",
    acts:[
      {time:"14:40", type:"drive",  label:"Land at Malpensa — collect bags"},
      {time:"16:00", type:"drive",  label:"Van pickup at rental desk"},
      {time:"16:45", type:"drive",  label:"Fill up fuel near airport"},
      {time:"17:15", type:"drive",  label:"Supermarket stop — Esselunga Somma Lombardo"},
      {time:"18:30", type:"drive",  label:"Park van near Ferno station · train to Milan centre"},
      {time:"20:00", type:"food",   label:"Dinner in Navigli district, Milan"},
      {time:"22:30", type:"drive",  label:"Drive toward Lago Maggiore (~1h)"},
    ],
    sleep:{name:"Lago Maggiore area", note:"Park4night · ~€30–50 · 1h from Milan"},
    warn:null,
    info:"Park the van near Ferno–Lonate Pozzolo station and take the direct train to Milan centre (~25 min). Easy first evening — don't push far tonight."
  },
  {
    num:2, day:"Tue", date:"26", month:"May",
    name:"Milan → Lago di Carezza → Val di Fassa",
    sub:"~4h drive · emerald UNESCO lake · valley base",
    photo:"images/Karersee.jpg",
    wikiCaption:"Lago di Carezza (Karersee), South Tyrol",
    acts:[
      {time:"08:00", type:"drive",  label:"Leave Lago Maggiore area"},
      {time:"09:00", type:"food",   label:"Breakfast stop en route — Trento area"},
      {time:"11:30", type:"drive",  label:"Arrive Lago di Carezza — pay parking (~€9/3h)"},
      {time:"11:45", type:"view",   label:"Lago di Carezza loop walk (1–2h)"},
      {time:"13:30", type:"food",   label:"Lunch at lakeside café"},
      {time:"14:30", type:"drive",  label:"Drive to Val di Fassa via SS241 (~45 min)"},
      {time:"15:30", type:"drive",  label:"Settle into Pozza / Vigo di Fassa"},
    ],
    sleep:{name:"Pozza / Vigo di Fassa", note:"Área camper · easy base for Day 3 hike"},
    warn:null,
    info:"Arrive at Carezza as early as possible — parking fills fast on sunny mornings. The emerald colour is best when the sun is high."
  },
  {
    num:3, day:"Wed", date:"27", month:"May",
    name:"Torres del Vajolet + Passo Sella",
    sub:"Catinaccio towers hike · sunset at 2,240m pass",
    photo:"images/Vajolet_Towers.JPG",
    wikiCaption:"Torres del Vajolet, Catinaccio massif",
    acts:[
      {time:"08:00", type:"drive",  label:"Drive to Pera di Fassa trailhead (~20 min)"},
      {time:"08:30", type:"hike",   label:"Cable car up to Rifugio Gardeccia"},
      {time:"09:00", type:"hike",   label:"Hike to Torres del Vajolet (~1.5h up)"},
      {time:"11:00", type:"view",   label:"Explore the Catinaccio towers"},
      {time:"12:30", type:"food",   label:"Lunch at Rifugio Vajolet"},
      {time:"14:00", type:"hike",   label:"Descent back to valley (~1.5h)"},
      {time:"16:30", type:"drive",  label:"Drive to Passo Sella (~30 min)"},
      {time:"18:30", type:"view",   label:"Passo Sella — sunset over Sassolungo & Sella Group"},
    ],
    sleep:{name:"Passo Sella area or Ortisei", note:"Van parking available · check access restriction below"},
    warn:"Passo Sella road may close to private vehicles on summer weekends. Check restrictions for late May — use the ski bus shuttle if the road is closed.",
    info:null
  },
  {
    num:4, day:"Thu", date:"28", month:"May",
    name:"Seceda + Alpe di Siusi",
    sub:"Iconic blade ridgeline · Europe's largest alpine plateau",
    photo:"images/Seceda.jpg",
    wikiCaption:"Seceda ridgeline and Odle peaks, Val Gardena",
    acts:[
      {time:"08:00", type:"drive",  label:"Drive to Ortisei cable car station (~20 min)"},
      {time:"08:30", type:"hike",   label:"Cable car up to Seceda (2,500m)"},
      {time:"09:00", type:"hike",   label:"Walk the Seceda ridgeline (~2–3h)"},
      {time:"11:30", type:"food",   label:"Lunch at Rifugio Firenze / Col Raiser area"},
      {time:"13:00", type:"drive",  label:"Drive to Alpe di Siusi (~30 min)"},
      {time:"13:30", type:"view",   label:"Alpe di Siusi plateau — easy loop walk or e-bike"},
      {time:"17:00", type:"view",   label:"Bonus: detour to Passo delle Erbe (~30 min drive)"},
      {time:"19:00", type:"drive",  label:"Return to Ortisei / Siusi for the night"},
    ],
    sleep:{name:"Ortisei / Siusi", note:"Área camper · good facilities"},
    warn:null,
    info:"Arrive at Ortisei cable car by 8:30am to beat crowds and the midday heat. The upper Seceda path costs €5 — go left at the fork, it's worth every cent."
  },
  {
    num:5, day:"Fri", date:"29", month:"May",
    name:"Val di Funes → Lago di Braies",
    sub:"THE postcard church · golden hour · turquoise lake arrival",
    photo:"images/Val_di_Funes.jpg",
    wikiCaption:"Santa Maddalena church, Val di Funes",
    acts:[
      {time:"09:00", type:"drive",  label:"Drive to Val di Funes — Santa Maddalena (~35 min)"},
      {time:"09:30", type:"view",   label:"Morning walk in Val di Funes valley"},
      {time:"11:00", type:"food",   label:"Lunch in Santa Maddalena village"},
      {time:"13:00", type:"drive",  label:"Relaxed afternoon — explore valley roads"},
      {time:"16:30", type:"view",   label:"Hike up to Santa Maddalena church viewpoint (~20 min)"},
      {time:"17:30", type:"view",   label:"Golden hour — Odle peaks light up behind the church"},
      {time:"19:30", type:"drive",  label:"Drive to Lago di Braies (~1h)"},
      {time:"20:30", type:"view",   label:"Evening stroll along the lake shore"},
    ],
    sleep:{name:"Lago di Braies", note:"Pre-book mandatory · ~€15/night for campervans"},
    warn:"Lago di Braies requires pre-booked parking entry in high season. Book at the official site — slots sell out weeks ahead.",
    info:"Time the church viewpoint for 17:00–19:00 — the Odle peaks face west and golden hour completely transforms the scene. Morning visit is fine but the light is flat."
  },
  {
    num:6, day:"Sat", date:"30", month:"May",
    name:"Braies · Misurina lakes · Tre Cime",
    sub:"Morning rowboat · scenic lake chain · iconic 10km circuit",
    photo:"images/Pragser_Wildsee.jpg",
    wikiCaption:"Lago di Braies (Pragser Wildsee)",
    acts:[
      {time:"07:00", type:"view",   label:"Early morning walk — lake before the crowds arrive"},
      {time:"09:00", type:"view",   label:"Rowboat on Lago di Braies (opens 9am, €55/45 min)"},
      {time:"10:30", type:"drive",  label:"Drive via Lago di Dobbiaco & Lago di Landro (~45 min)"},
      {time:"11:30", type:"view",   label:"Lago di Misurina — 2.6km loop walk (~45 min)"},
      {time:"12:30", type:"food",   label:"Lunch at Misurina village"},
      {time:"13:30", type:"drive",  label:"Drive up to Rifugio Auronzo road (pay €35–40 toll)"},
      {time:"14:00", type:"hike",   label:"Tre Cime di Lavaredo circuit (~10km, 3h)"},
      {time:"17:00", type:"food",   label:"Coffee & strudel at Rifugio Locatelli"},
      {time:"18:00", type:"drive",  label:"Return to Rifugio Auronzo parking for the night"},
    ],
    sleep:{name:"Rifugio Auronzo parking", note:"Must reserve in advance · auronzo.it"},
    warn:"Rifugio Auronzo overnight parking must be booked online in advance — non-negotiable in high season. Also budget ~€35–40 for the national park road toll.",
    info:null
  },
  {
    num:7, day:"Sun", date:"31", month:"May",
    name:"Cadini sunrise + Lago di Sorapis",
    sub:"Pre-dawn viewpoint · glacial turquoise lake hike",
    photo:"images/Tre_Cime_di_Lavaredo.jpg",
    wikiCaption:"Tre Cime di Lavaredo, Sexten Dolomites",
    acts:[
      {time:"04:30", type:"hike",   label:"Start hike to Cadini viewpoint — trail 117 (~45 min up)"},
      {time:"05:20", type:"view",   label:"Sunrise at Cadini di Misurina — Tre Cime behind the spires"},
      {time:"06:30", type:"hike",   label:"Descend back to van · breakfast + rest"},
      {time:"09:00", type:"drive",  label:"Drive down to Passo Tre Croci parking (~25 min)"},
      {time:"09:30", type:"hike",   label:"Lago di Sorapis hike — start (~5km each way, 2.5h up)"},
      {time:"12:00", type:"view",   label:"Lago di Sorapis — milky turquoise glacial lake"},
      {time:"12:30", type:"food",   label:"Lunch at Rifugio Vandelli by the lake"},
      {time:"14:30", type:"hike",   label:"Descent back to Passo Tre Croci (~2h)"},
      {time:"17:00", type:"drive",  label:"Drive to Cortina d'Ampezzo (~15 min)"},
      {time:"19:00", type:"food",   label:"Dinner in Cortina town centre"},
    ],
    sleep:{name:"Passo Tre Croci or Cortina d'Ampezzo", note:"Cortina has better van facilities + restaurants"},
    warn:null,
    info:"Start the Cadini hike by 4:30am for a late-May sunrise (~5:20am). For Sorapis parking: arriving after 13:30 can be smarter as early hikers start returning and spots open up."
  },
  {
    num:8, day:"Mon", date:"1", month:"Jun",
    name:"Passo Giau · Cinque Torri · Marmolada · Alleghe",
    sub:"Finest pass in the Dolomites · WWI museum · glacier · final night",
    photo:"images/Passo_Giau.jpg",
    wikiCaption:"Passo Giau (2,233m), Dolomites",
    acts:[
      {time:"08:00", type:"drive",  label:"Drive up to Passo Giau (2,233m) — ~30 min from Cortina"},
      {time:"08:30", type:"view",   label:"Passo Giau — 360° panorama, walk the meadows"},
      {time:"10:00", type:"drive",  label:"Drive to Cinque Torri chairlift (~20 min)"},
      {time:"10:30", type:"hike",   label:"Chairlift up + explore Cinque Torri rock towers"},
      {time:"11:30", type:"hike",   label:"WWI open-air museum — original trenches & bunkers"},
      {time:"13:00", type:"food",   label:"Lunch at Rifugio Cinque Torri"},
      {time:"14:30", type:"view",   label:"Bonus: Lagazuoi cable car to 2,778m (~20 min drive)"},
      {time:"16:00", type:"drive",  label:"Drive south toward Marmolada (~1h)"},
      {time:"17:00", type:"view",   label:"Marmolada glacier approach & viewpoint"},
      {time:"18:30", type:"drive",  label:"Drive to Alleghe (~30 min)"},
      {time:"20:00", type:"food",   label:"Dinner in Alleghe — last mountain evening"},
    ],
    sleep:{name:"Alleghe", note:"Last mountain night · lakeside área camper"},
    warn:null,
    info:"This is a full day — if energy is low after the early Cadini start, skip Lagazuoi or Marmolada. Passo Giau + Cinque Torri alone is a perfect day."
  },
  {
    num:9, day:"Tue", date:"2", month:"Jun",
    name:"Return to Milan Malpensa",
    sub:"~4.5h drive · van return by 18:00",
    photo:"images/Alleghe.JPG",
    wikiCaption:"Lago di Alleghe with the Civetta massif",
    acts:[
      {time:"07:00", type:"drive",  label:"Leave Alleghe — early start essential"},
      {time:"08:30", type:"food",   label:"Breakfast stop in Bolzano old town (~1h stop)"},
      {time:"10:00", type:"drive",  label:"A22 autostrada north → Brennero → A4 west"},
      {time:"12:00", type:"drive",  label:"Fill up fuel before reaching Malpensa"},
      {time:"13:00", type:"drive",  label:"Van return at Malpensa rental desk (deadline 18:00)"},
    ],
    sleep:{name:"Flight home", note:"Fill up fuel before returning — most rentals require a full tank"},
    warn:"2 June is Republic Day in Italy — national holiday. Expect significantly heavier traffic on the A4 toward Milan. Leaving Alleghe by 7am is not optional.",
    info:null
  }
];

const iconWarn = `<svg class="warn-box-icon" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/><line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.6" fill="currentColor"/></svg>`;
const iconInfo = `<svg class="info-box-icon" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/><line x1="8" y1="7" x2="8" y2="11" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><circle cx="8" cy="5" r="0.7" fill="currentColor"/></svg>`;
const iconSleep = `<svg class="sleep-icon" viewBox="0 0 20 20" fill="none"><path d="M3 13.5C3 10.46 5.46 8 8.5 8C9.77 8 10.94 8.43 11.87 9.16" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M4 16H16M4 16C4 14.9 4.9 14 6 14H14C15.1 14 16 14.9 16 16M4 16H3M16 16H17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><path d="M12 10H17L14 13H17" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function loadPhoto(day) {
  const el = document.getElementById(`photo-${day.num}`);
  if (!el || !day.photo) return;
  el.innerHTML = `<img src="${day.photo}" alt="${day.name}"><div class="card-photo-caption">${day.wikiCaption} · © Wikipedia / CC</div>`;
}

const tl = document.getElementById('timeline');

days.forEach((d, i) => {
  const row = document.createElement('div');
  row.className = 'day-row';

  const actsHtml = d.acts.map(a =>
    `<div class="act">
      <span class="act-time">${a.time}</span>
      <span class="act-dot dot-${a.type}"></span>
      <span class="act-label">${a.label}</span>
    </div>`
  ).join('');

  const warnHtml = d.warn ? `<div class="warn-box">${iconWarn}<div class="warn-box-text">${d.warn}</div></div>` : '';
  const infoHtml = d.info ? `<div class="info-box">${iconInfo}<div class="info-box-text">${d.info}</div></div>` : '';

  row.innerHTML = `
    <div class="day-spine">
      <div class="day-circle">
        <span class="day-num">${d.day}</span>
        <span class="day-date-num">${d.date}</span>
        <span class="day-month">${d.month}</span>
      </div>
    </div>
    <div class="day-card">
      <div class="card-header">
        <div class="card-header-left">
          <div class="card-day-label">Day ${d.num}</div>
          <div class="card-name">${d.name}</div>
          <div class="card-sub">${d.sub}</div>
        </div>
        <div class="card-header-right">
          ${d.warn ? `<div class="warn-badge"><svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.7" fill="currentColor"/></svg> note</div>` : ''}
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="card-body">
        ${d.photo ? `<div class="card-photo" id="photo-${d.num}"><div class="photo-skeleton">Loading photo…</div></div>` : ''}
        <div class="card-body-inner">
          <div class="acts-label">Schedule</div>
          <div class="acts">${actsHtml}</div>
          <div class="sleep-section">
            ${iconSleep}
            <div>
              <div class="sleep-name">${d.sleep.name}</div>
              <div class="sleep-note">${d.sleep.note}</div>
            </div>
          </div>
          ${warnHtml}${infoHtml}
        </div>
      </div>
    </div>
  `;

  const card = row.querySelector('.day-card');
  card.addEventListener('click', () => {
    row.classList.toggle('open');
    if (row.classList.contains('open')) {
      const photoEl = row.querySelector('[id^="photo-"]');
      if (photoEl && photoEl.querySelector('.photo-skeleton')) {
        loadPhoto(d);
      }
    }
  });
  tl.appendChild(row);
});

const toggle = document.getElementById('themeToggle');
const label = document.getElementById('themeLabel');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) {
  document.documentElement.setAttribute('data-theme', 'dark');
  label.textContent = 'Light';
}
toggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  label.textContent = isDark ? 'Dark' : 'Light';
});

// ── MAP ──
const stops = [
  { day:1,  name:"Milan Malpensa",    lat:45.6227, lng:8.7282,  sleep:false, color:"#888780" },
  { day:1,  name:"Lago Maggiore",      lat:45.9968, lng:8.6536,  sleep:true,  color:"#2B5C3F" },
  { day:2,  name:"Lago di Carezza",    lat:46.4092, lng:11.5751, sleep:false, color:"#4A8C65" },
  { day:2,  name:"Val di Fassa",       lat:46.4333, lng:11.7000, sleep:true,  color:"#2B5C3F" },
  { day:3,  name:"Passo Sella",        lat:46.5092, lng:11.7583, sleep:true,  color:"#2B5C3F" },
  { day:4,  name:"Seceda / Ortisei",   lat:46.5748, lng:11.6711, sleep:true,  color:"#2B5C3F" },
  { day:5,  name:"Santa Maddalena",    lat:46.6447, lng:11.7194, sleep:false, color:"#4A8C65" },
  { day:5,  name:"Lago di Braies",     lat:46.6943, lng:12.0854, sleep:true,  color:"#2B5C3F" },
  { day:6,  name:"Rifugio Auronzo",    lat:46.6122, lng:12.2962, sleep:true,  color:"#2B5C3F" },
  { day:7,  name:"Sorapis / Cortina",  lat:46.5578, lng:12.2036, sleep:true,  color:"#2B5C3F" },
  { day:8,  name:"Passo Giau",         lat:46.4831, lng:12.0542, sleep:false, color:"#4A8C65" },
  { day:8,  name:"Lago di Alleghe",    lat:46.4065, lng:12.0162, sleep:true,  color:"#2B5C3F" },
  { day:9,  name:"Milan Malpensa",     lat:45.6227, lng:8.7282,  sleep:false, color:"#888780" },
];

(function buildStopCards() {
  const stopsEl = document.getElementById('mapStops');
  const seen = new Set();
  let cardIdx = 1;
  stops.forEach((s, i) => {
    const key = s.name + s.day;
    if (seen.has(key)) return;
    seen.add(key);
    const el = document.createElement('div');
    el.className = 'map-stop';
    el.dataset.stopIdx = i;
    el.innerHTML = `
      <div class="map-stop-num" style="background:${s.color}">${cardIdx++}</div>
      <div class="map-stop-info">
        <div class="map-stop-name">${s.name}</div>
        <div class="map-stop-day">Day ${s.day}${s.sleep ? ' · sleep' : ''}</div>
      </div>`;
    stopsEl.appendChild(el);
  });
})();

(function buildLeafletMap() {
  const map = L.map('map', { zoomControl: true, scrollWheelZoom: false }).setView([46.3, 11.0], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);

  // Dashed route polyline
  const routeCoords = stops.map(s => [s.lat, s.lng]);
  L.polyline(routeCoords, {
    color: '#2B5C3F',
    weight: 2.5,
    opacity: 0.75,
    dashArray: '8 6',
  }).addTo(map);

  // Custom circular marker icon
  function makeIcon(color, size) {
    const r = size / 2;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${r}" cy="${r}" r="${r - 1.5}" fill="${color}" stroke="#fff" stroke-width="2"/>
    </svg>`;
    return L.divIcon({
      html: svg,
      className: '',
      iconSize: [size, size],
      iconAnchor: [r, r],
      popupAnchor: [0, -r],
    });
  }

  // Add markers and store references for stop-card clicks
  const leafletMarkers = stops.map(s => {
    const size = s.sleep || s.name === 'Milan Malpensa' ? 18 : 12;
    const marker = L.marker([s.lat, s.lng], { icon: makeIcon(s.color, size) })
      .addTo(map)
      .bindPopup(`<strong>${s.name}</strong><br><span style="font-size:11px;color:#888">Day ${s.day}${s.sleep ? ' · sleep' : ''}</span>`);
    return marker;
  });

  // Wire up stop card clicks — pan to marker and open popup
  document.querySelectorAll('.map-stop').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.dataset.stopIdx);
      const marker = leafletMarkers[idx];
      if (marker) {
        map.setView(marker.getLatLng(), 11, { animate: true });
        marker.openPopup();
      }
      document.querySelectorAll('.map-stop').forEach(c => c.style.borderColor = '');
      card.style.borderColor = 'var(--accent)';
      setTimeout(() => { card.style.borderColor = ''; }, 1500);
    });
  });
})();
