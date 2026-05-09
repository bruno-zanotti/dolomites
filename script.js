const days = [
  {
    num:1, day:"Lun", date:"25", month:"May",
    name:"Llegada — Milán y primera noche",
    sub:"Recogida de la van · compras · cena en Milán",
    photo:"images/Navigli_Milan.jpg",
    wikiCaption:"Canales de Navigli, Milán",
    acts:[
      {time:"14:40", type:"drive",  label:"Aterrizar en Malpensa — recoger el equipaje"},
      {time:"16:00", type:"drive",  label:"Recoger la van en el mostrador de alquiler"},
      {time:"16:45", type:"drive",  label:"Llenar el depósito cerca del aeropuerto"},
      {time:"17:15", type:"drive",  label:"Parada en supermercado — Esselunga Somma Lombardo"},
      {time:"18:30", type:"drive",  label:"Aparcar la van cerca de la estación de Ferno · tren al centro de Milán"},
      {time:"20:00", type:"food",   label:"Cena en el barrio de Navigli, Milán"},
      {time:"22:30", type:"drive",  label:"Conducir hacia el Lago Maggiore (~1h)"},
    ],
    sleep:{name:"Zona del Lago Maggiore", note:"Park4night · ~€30–50 · 1h desde Milán"},
    warn:null,
    info:"Aparca la van cerca de la estación de Ferno–Lonate Pozzolo y toma el tren directo al centro de Milán (~25 min). Primera noche tranquila — no te alejes demasiado."
  },
  {
    num:2, day:"Mar", date:"26", month:"May",
    name:"Milán → Lago di Carezza → Val di Fassa",
    sub:"~4h en coche · lago esmeralda UNESCO · base en el valle",
    photo:"images/Karersee.jpg",
    wikiCaption:"Lago di Carezza (Karersee), Alto Adigio",
    acts:[
      {time:"08:00", type:"drive",  label:"Salir de la zona del Lago Maggiore"},
      {time:"09:00", type:"food",   label:"Parada de desayuno en ruta — zona de Trento"},
      {time:"11:30", type:"drive",  label:"Llegar al Lago di Carezza — pagar aparcamiento (~€9/3h)"},
      {time:"11:45", type:"view",   label:"Paseo circular por el Lago di Carezza (1–2h)"},
      {time:"13:30", type:"food",   label:"Almuerzo en el café junto al lago"},
      {time:"14:30", type:"drive",  label:"Conducir hacia Val di Fassa por la SS241 (~45 min)"},
      {time:"15:30", type:"drive",  label:"Instalarse en Pozza / Vigo di Fassa"},
    ],
    sleep:{name:"Pozza / Vigo di Fassa", note:"Área camper · base cómoda para la ruta del Día 3"},
    warn:null,
    info:"Llega a Carezza lo antes posible — el aparcamiento se llena rápido en mañanas soleadas. El color esmeralda luce mejor con el sol alto."
  },
  {
    num:3, day:"Mié", date:"27", month:"May",
    name:"Torres del Vajolet + Passo Sella",
    sub:"Senderismo al Catinaccio · atardecer en el puerto a 2.240m",
    photo:"images/Vajolet_Towers.JPG",
    wikiCaption:"Torres del Vajolet, macizo del Catinaccio",
    acts:[
      {time:"08:00", type:"drive",  label:"Conducir al punto de partida de Pera di Fassa (~20 min)"},
      {time:"08:30", type:"hike",   label:"Teleférico hasta el Rifugio Gardeccia"},
      {time:"09:00", type:"hike",   label:"Senderismo hacia las Torres del Vajolet (~1,5h de subida)"},
      {time:"11:00", type:"view",   label:"Explorar las torres del Catinaccio"},
      {time:"12:30", type:"food",   label:"Almuerzo en el Rifugio Vajolet"},
      {time:"14:00", type:"hike",   label:"Descenso al valle (~1,5h)"},
      {time:"16:30", type:"drive",  label:"Conducir hacia el Passo Sella (~30 min)"},
      {time:"18:30", type:"view",   label:"Passo Sella — atardecer sobre el Sassolungo y el Grupo Sella"},
    ],
    sleep:{name:"Ortisei / Val Gardena", note:"Mejor base para el Día 4 — área camper con buenas instalaciones"},
    warn:"La carretera del Passo Sella puede tener restricciones de acceso para vehículos privados en fines de semana de verano. Compruébalo antes de subir — hay un autobús de esquí como alternativa.",
    info:null
  },
  {
    num:4, day:"Jue", date:"28", month:"May",
    name:"Seceda + Alpe di Siusi",
    sub:"Icónica cresta en cuchilla · mayor meseta alpina de Europa",
    photo:"images/Seceda.jpg",
    wikiCaption:"Cresta de Seceda y picos Odle, Val Gardena",
    acts:[
      {time:"08:00", type:"drive",  label:"Conducir a la estación del teleférico de Ortisei (~20 min)"},
      {time:"08:30", type:"hike",   label:"Teleférico hasta Seceda (2.500m)"},
      {time:"09:00", type:"hike",   label:"Recorrer la cresta de Seceda (~2–3h)"},
      {time:"11:30", type:"food",   label:"Almuerzo en el Rifugio Firenze / zona del Col Raiser"},
      {time:"13:00", type:"drive",  label:"Conducir hacia el Alpe di Siusi (~30 min)"},
      {time:"13:30", type:"view",   label:"Meseta del Alpe di Siusi — paseo circular sencillo o e-bike"},
      {time:"17:00", type:"view",   label:"Extra: desvío al Passo delle Erbe (~30 min en coche)"},
      {time:"19:00", type:"drive",  label:"Regresar a Ortisei / Siusi para pasar la noche"},
    ],
    sleep:{name:"Ortisei / Siusi", note:"Área camper · buenas instalaciones · o avanzar a Val di Funes para estar listos la mañana del Día 5"},
    warn:null,
    info:"Llega al teleférico de Ortisei a las 8:30h para evitar aglomeraciones y el calor del mediodía. El camino alto de Seceda cuesta €5 — gira a la izquierda en el cruce, vale cada céntimo."
  },
  {
    num:5, day:"Vie", date:"29", month:"May",
    name:"Val di Funes → Lago di Braies",
    sub:"LA postal de los Dolomitas · hora dorada · llegada al lago turquesa",
    photo:"images/Val_di_Funes.jpg",
    wikiCaption:"Iglesia de Santa Maddalena, Val di Funes",
    acts:[
      {time:"09:00", type:"drive",  label:"Conducir a Val di Funes — Santa Maddalena (~35 min)"},
      {time:"09:30", type:"view",   label:"Paseo matutino por el valle de Val di Funes"},
      {time:"11:00", type:"food",   label:"Almuerzo en el pueblo de Santa Maddalena"},
      {time:"13:00", type:"drive",  label:"Tarde relajada — explorar las carreteras del valle"},
      {time:"16:30", type:"view",   label:"Subir al mirador de la iglesia de Santa Maddalena (~20 min)"},
      {time:"17:30", type:"view",   label:"Hora dorada — los picos Odle se iluminan tras la iglesia"},
      {time:"19:30", type:"drive",  label:"Conducir al Lago di Braies (~1h)"},
      {time:"20:30", type:"view",   label:"Paseo vespertino a orillas del lago"},
    ],
    sleep:{name:"Lago di Braies", note:"Reserva obligatoria · ~€15/noche · alternativa: área camper en Dobbiaco / Villabassa"},
    warn:"El Lago di Braies requiere reserva previa de entrada en temporada alta. Reserva en el sitio oficial — los plazos se agotan semanas antes. Si no hay disponibilidad, Dobbiaco / Villabassa tiene áreas camper de confianza.",
    info:"Llega al mirador de la iglesia entre las 17:00 y las 19:00 — los picos Odle dan al oeste y la hora dorada transforma completamente la escena. La visita de mañana está bien, pero la luz es plana."
  },
  {
    num:6, day:"Sáb", date:"30", month:"May",
    name:"Braies · Lagos de Misurina · Tre Cime",
    sub:"Barca de remos al amanecer · cadena de lagos · circuito icónico de 10km",
    photo:"images/Pragser_Wildsee.jpg",
    wikiCaption:"Lago di Braies (Pragser Wildsee)",
    acts:[
      {time:"07:00", type:"view",   label:"Paseo temprano — el lago antes de que lleguen las masas"},
      {time:"09:00", type:"view",   label:"Barca de remos en el Lago di Braies (abre 9h, €55/45 min)"},
      {time:"10:30", type:"drive",  label:"Conducir por el Lago di Dobbiaco y el Lago di Landro (~45 min)"},
      {time:"11:30", type:"view",   label:"Lago di Misurina — paseo circular de 2,6km (~45 min)"},
      {time:"12:30", type:"food",   label:"Almuerzo en el pueblo de Misurina"},
      {time:"13:30", type:"drive",  label:"Subir por la carretera del Rifugio Auronzo (peaje €35–40)"},
      {time:"14:00", type:"hike",   label:"Circuito de las Tre Cime di Lavaredo (~10km, 3h)"},
      {time:"17:00", type:"food",   label:"Café y strudel en el Rifugio Locatelli"},
      {time:"18:00", type:"drive",  label:"Descender hacia Misurina / Passo Tre Croci para pasar la noche"},
    ],
    sleep:{name:"Misurina o Passo Tre Croci", note:"Estratégico para el inicio del Día 7 en Cadini · pernoctar en Auronzo está muy regulado — confirmar con antelación"},
    warn:"Presupuesta ~€35–40 para el peaje de la carretera del parque nacional hasta el Rifugio Auronzo. Pernoctar en el aparcamiento de Auronzo está muy regulado — Misurina o Passo Tre Croci son opciones más fiables y mejor situadas para la salida al amanecer del Cadini del Día 7.",
    info:null
  },
  {
    num:7, day:"Dom", date:"31", month:"May",
    name:"Amanecer en Cadini + Lago di Sorapis",
    sub:"Mirador antes del alba · senderismo al lago glacial turquesa",
    photo:"images/Tre_Cime_di_Lavaredo.jpg",
    wikiCaption:"Tre Cime di Lavaredo, Dolomitas de Sexten",
    acts:[
      {time:"04:30", type:"hike",   label:"Inicio de la subida al mirador del Cadini — sendero 117 (~45 min)"},
      {time:"05:20", type:"view",   label:"Amanecer en Cadini di Misurina — las Tre Cime tras las agujas"},
      {time:"06:30", type:"hike",   label:"Descender a la van · desayuno y descanso"},
      {time:"09:00", type:"drive",  label:"Bajar al aparcamiento del Passo Tre Croci (~25 min)"},
      {time:"09:30", type:"hike",   label:"Inicio de la ruta al Lago di Sorapis (~5km ida, 2,5h de subida)"},
      {time:"12:00", type:"view",   label:"Lago di Sorapis — lago glacial de turquesa lechoso"},
      {time:"12:30", type:"food",   label:"Almuerzo en el Rifugio Vandelli junto al lago"},
      {time:"14:30", type:"hike",   label:"Descenso al Passo Tre Croci (~2h)"},
      {time:"17:00", type:"drive",  label:"Conducir a Cortina d'Ampezzo (~15 min)"},
      {time:"19:00", type:"food",   label:"Cena en el centro de Cortina"},
    ],
    sleep:{name:"Passo Tre Croci · Cortina · o zona de Cinque Torri", note:"Cortina tiene las mejores instalaciones · la zona Cinque Torri / Falzarego es estratégica para el Día 8"},
    warn:null,
    info:"Empieza la ruta al Cadini a las 4:30h para ver el amanecer a finales de mayo (~5:20h). Para aparcar en Sorapis: llegar después de las 13:30 puede ser más inteligente, pues los senderistas madrugadores empiezan a regresar y se liberan plazas."
  },
  {
    num:8, day:"Lun", date:"1", month:"Jun",
    name:"Passo Giau · Cinque Torri · Marmolada · Alleghe",
    sub:"El mejor puerto de los Dolomitas · museo de la I Guerra Mundial · glaciar · última noche",
    photo:"images/Passo_Giau.jpg",
    wikiCaption:"Passo Giau (2.233m), Dolomitas",
    acts:[
      {time:"08:00", type:"drive",  label:"Subir al Passo Giau (2.233m) — ~30 min desde Cortina"},
      {time:"08:30", type:"view",   label:"Passo Giau — panorama de 360°, paseo por los prados"},
      {time:"10:00", type:"drive",  label:"Conducir hasta el telesilla de Cinque Torri (~20 min)"},
      {time:"10:30", type:"hike",   label:"Telesilla + explorar las torres de roca de Cinque Torri"},
      {time:"11:30", type:"hike",   label:"Museo al aire libre de la I Guerra Mundial — trincheras y búnkeres originales"},
      {time:"13:00", type:"food",   label:"Almuerzo en el Rifugio Cinque Torri"},
      {time:"14:30", type:"view",   label:"Extra: teleférico del Lagazuoi hasta 2.778m + paseo al Lago Limedes (~20 min en coche desde Cinque Torri)"},
      {time:"16:00", type:"drive",  label:"Conducir al sur hacia la Marmolada (~1h)"},
      {time:"17:00", type:"view",   label:"Acercamiento al glaciar de la Marmolada y mirador"},
      {time:"18:30", type:"drive",  label:"Conducir a Alleghe (~30 min)"},
      {time:"20:00", type:"food",   label:"Cena en Alleghe — última velada en la montaña"},
    ],
    sleep:{name:"Alleghe", note:"Última noche en la montaña · área camper junto al lago"},
    warn:null,
    info:"Este es un día completo — si la energía está baja tras el madrugón del Cadini, omite el Lagazuoi o la Marmolada. Passo Giau + Cinque Torri solos son ya un día perfecto."
  },
  {
    num:9, day:"Mar", date:"2", month:"Jun",
    name:"Regreso a Milán Malpensa",
    sub:"~4,5h en coche · devolver la van antes de las 18:00",
    photo:"images/Alleghe.JPG",
    wikiCaption:"Lago di Alleghe con el macizo del Civetta",
    acts:[
      {time:"07:00", type:"drive",  label:"Salir de Alleghe — la salida temprana es imprescindible"},
      {time:"08:30", type:"food",   label:"Parada de desayuno en el casco antiguo de Bolzano (~1h)"},
      {time:"10:00", type:"drive",  label:"Autopista A22 norte → Brennero → A4 oeste"},
      {time:"12:00", type:"drive",  label:"Llenar el depósito antes de llegar a Malpensa"},
      {time:"13:00", type:"drive",  label:"Devolver la van en el mostrador de alquiler de Malpensa (límite 18:00)"},
    ],
    sleep:{name:"Vuelo a casa", note:"Llena el depósito antes de devolver la van — la mayoría de alquileres exigen el depósito lleno"},
    warn:"El 2 de junio es el Día de la República en Italia — festivo nacional. Espera tráfico significativamente más denso en la A4 hacia Milán. Salir de Alleghe a las 7h no es opcional.",
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
  row.style.setProperty('--i', i);

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
          <div class="card-day-label">Día ${d.num}</div>
          <div class="card-name">${d.name}</div>
          <div class="card-sub">${d.sub}</div>
        </div>
        <div class="card-header-right">
          ${d.photo ? `<div class="card-thumb"><img src="${d.photo}" alt="${d.name}" loading="lazy"></div>` : ''}
          ${d.warn ? `<div class="warn-badge"><svg width="11" height="11" viewBox="0 0 16 16" fill="none"><path d="M8 2L14.5 13H1.5L8 2Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><line x1="8" y1="7" x2="8" y2="10" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.7" fill="currentColor"/></svg> note</div>` : ''}
          <span class="chevron">▾</span>
        </div>
      </div>
      <div class="card-body">
        ${d.photo ? `<div class="card-photo" id="photo-${d.num}"><div class="photo-skeleton">Cargando foto…</div></div>` : ''}
        <div class="card-body-inner">
          <div class="acts-label">Horario</div>
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
    const isOpen = row.classList.contains('open');
    document.querySelectorAll('.day-row.open').forEach(r => r.classList.remove('open'));
    if (!isOpen) {
      row.classList.add('open');
      const photoEl = row.querySelector('[id^="photo-"]');
      if (photoEl && photoEl.querySelector('.photo-skeleton')) loadPhoto(d);
      focusMapDay(d.num);
    }
  });
  tl.appendChild(row);
});

const toggle = document.getElementById('themeToggle');
const label = document.getElementById('themeLabel');
toggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  label.textContent = isDark ? 'Oscuro' : 'Claro';
});

// ── MAP ──
const stops = [
  { day:1,  name:"Milan",              lat:45.4654, lng:9.1859,  sleep:false, emoji:"✈️"  },
  { day:1,  name:"Sirmione",           lat:45.4957, lng:10.6088, sleep:true,  emoji:"⛺"  },
  { day:2,  name:"Lago di Carezza",    lat:46.4092, lng:11.5751, sleep:false, emoji:"🏞️" },
  { day:2,  name:"Val di Fassa",       lat:46.4333, lng:11.7000, sleep:true,  emoji:"⛺"  },
  { day:3,  name:"Passo Sella",        lat:46.5092, lng:11.7583, sleep:true,  emoji:"🏔️" },
  { day:4,  name:"Seceda / Ortisei",   lat:46.5748, lng:11.6711, sleep:true,  emoji:"🥾" },
  { day:5,  name:"Santa Maddalena",    lat:46.6447, lng:11.7194, sleep:false, emoji:"📸"  },
  { day:5,  name:"Lago di Braies",     lat:46.6943, lng:12.0854, sleep:true,  emoji:"🏞️" },
  { day:6,  name:"Rifugio Auronzo",    lat:46.6122, lng:12.2962, sleep:true,  emoji:"⛺"  },
  { day:7,  name:"Sorapis / Cortina",  lat:46.5578, lng:12.2036, sleep:true,  emoji:"🥾" },
  { day:8,  name:"Passo Giau",         lat:46.4831, lng:12.0542, sleep:false, emoji:"🏔️" },
  { day:8,  name:"Lago di Alleghe",    lat:46.4065, lng:12.0162, sleep:true,  emoji:"🏞️" },
  { day:9,  name:"Milan Malpensa",     lat:45.6227, lng:8.7282,  sleep:false, emoji:"✈️"  },
];

let leafletMap, leafletMarkers, currentTile;

const tileConfigs = {
  standard: {
    url: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    opts: { attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>', subdomains: 'abcd', maxZoom: 19 },
  },
  topo: {
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    opts: { attribution: 'Map data: © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | © <a href="https://opentopomap.org">OpenTopoMap</a> (CC-BY-SA)', subdomains: 'abc', maxZoom: 17 },
  },
  satellite: {
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    opts: { attribution: 'Tiles &copy; Esri — Esri, USGS, USDA, and GIS User Community', maxZoom: 18 },
  },
};

function setMapStyle(style) {
  if (!leafletMap) return;
  if (currentTile) leafletMap.removeLayer(currentTile);
  const cfg = tileConfigs[style];
  currentTile = L.tileLayer(cfg.url, cfg.opts).addTo(leafletMap);
  currentTile.bringToBack();
}

(function buildLeafletMap() {
  leafletMap = L.map('map', { zoomControl: true, scrollWheelZoom: false }).setView([46.3, 11.0], 8);

  document.getElementById('map').addEventListener('wheel', function(e) {
    if (e.metaKey) {
      e.preventDefault();
      if (e.deltaY < 0) leafletMap.zoomIn();
      else leafletMap.zoomOut();
    }
  }, { passive: false });

  currentTile = L.tileLayer(tileConfigs.standard.url, tileConfigs.standard.opts).addTo(leafletMap);

  function makeIcon(isSleep) {
    if (isSleep) {
      return L.divIcon({
        html: `<div style="width:30px;height:30px;background:#2B5C3F;border-radius:50%;border:2.5px solid rgba(255,255,255,0.92);box-shadow:0 2px 8px rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center"><svg viewBox="0 0 18 18" fill="none" style="width:14px;height:14px"><path d="M1 15L9 3L17 15H1Z" stroke="white" stroke-width="1.5" stroke-linejoin="round" fill="rgba(255,255,255,0.18)"/><path d="M6 15v-4a3 3 0 0 1 6 0v4" fill="white"/></svg></div>`,
        className: '',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, -18],
      });
    }
    return L.divIcon({
      html: `<div style="width:10px;height:10px;border-radius:50%;background:#4A8C65;border:2.5px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.35)"></div>`,
      className: '',
      iconSize: [10, 10],
      iconAnchor: [5, 5],
      popupAnchor: [0, -8],
    });
  }

  leafletMarkers = stops.map(s =>
    L.marker([s.lat, s.lng], { icon: makeIcon(s.sleep) })
      .addTo(leafletMap)
      .bindPopup(`<strong>${s.name}</strong><br><span style="font-size:11px;color:#888">Día ${s.day}${s.sleep ? ' · dormir' : ''}</span>`)
  );

  // Draw straight-line fallback, then replace with real road geometry from OSRM
  let routeLine = L.polyline(stops.map(s => [s.lat, s.lng]), {
    color: '#2B5C3F', weight: 2.5, opacity: 0.6, dashArray: '8 6',
  }).addTo(leafletMap);

  (async function fetchRoadRoute() {
    try {
      const coords = stops.map(s => `${s.lng},${s.lat}`).join(';');
      const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${coords}?overview=full&geometries=geojson`);
      const data = await res.json();
      if (data.code === 'Ok' && data.routes?.[0]) {
        const latlngs = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
        leafletMap.removeLayer(routeLine);
        routeLine = L.polyline(latlngs, {
          color: '#2B5C3F', weight: 2.5, opacity: 0.75, dashArray: '8 6',
        }).addTo(leafletMap);
      }
    } catch(e) { /* keep fallback */ }
  })();
})();

document.querySelectorAll('.map-style-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.map-style-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    setMapStyle(btn.dataset.style);
  });
});

function focusMapDay(dayNum) {
  const stopIdx = stops.findIndex(s => s.day === dayNum);
  if (stopIdx === -1) return;
  const marker = leafletMarkers[stopIdx];
  const latlng = marker.getLatLng();
  // Offset center slightly south so the location appears in the upper-centre of the map
  const offset = leafletMap.getZoom() > 9 ? 0.04 : 0.15;
  leafletMap.flyTo([latlng.lat - offset, latlng.lng], 11, { duration: 0.8 });
  setTimeout(() => marker.openPopup(), 850);
}
