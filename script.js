"use strict";


/* ==========================================================
   İSTANBUL SENDE
   ========================================================== */


/* ==========================================================
   GEZİLECEK YERLER
   ========================================================== */

const places = [

    /* ======================================================
       AVRUPA YAKASI
       ====================================================== */

    {
        id: "ayasofya",
        name: "Ayasofya",
        district: "Fatih",
        side: "avrupa",
        icon: "🕌",
        description: "İstanbul'un en önemli tarihi yapılarından biri.",
        lat: 41.0086,
        lng: 28.9802
    },

    {
        id: "topkapi",
        name: "Topkapı Sarayı",
        district: "Fatih",
        side: "avrupa",
        icon: "🏛️",
        description: "Osmanlı döneminin önemli saraylarından.",
        lat: 41.0115,
        lng: 28.9833
    },

    {
        id: "yerebatan",
        name: "Yerebatan Sarnıcı",
        district: "Fatih",
        side: "avrupa",
        icon: "🏛️",
        description: "Bizans döneminden kalma tarihi sarnıç.",
        lat: 41.0084,
        lng: 28.9779
    },

    {
        id: "sultanahmet",
        name: "Sultanahmet Meydanı",
        district: "Fatih",
        side: "avrupa",
        icon: "⛲",
        description: "Tarihi yarımadanın en önemli meydanlarından.",
        lat: 41.0054,
        lng: 28.9768
    },

    {
        id: "galata",
        name: "Galata Kulesi",
        district: "Beyoğlu",
        side: "avrupa",
        icon: "🗼",
        description: "İstanbul'un dünyaca tanınan simge yapısı.",
        lat: 41.0256,
        lng: 28.9741
    },

    {
        id: "istiklal",
        name: "İstiklal Caddesi",
        district: "Beyoğlu",
        side: "avrupa",
        icon: "🚶",
        description: "İstanbul'un en ünlü yaya caddelerinden.",
        lat: 41.0340,
        lng: 28.9784
    },

    {
        id: "taksim",
        name: "Taksim Meydanı",
        district: "Beyoğlu",
        side: "avrupa",
        icon: "🏙️",
        description: "İstanbul'un önemli merkezi meydanlarından.",
        lat: 41.0369,
        lng: 28.9850
    },

    {
        id: "pera",
        name: "Pera Müzesi",
        district: "Beyoğlu",
        side: "avrupa",
        icon: "🎨",
        description: "Beyoğlu'ndaki önemli sanat müzelerinden.",
        lat: 41.0312,
        lng: 28.9753
    },

    {
        id: "istanbul-modern",
        name: "İstanbul Modern",
        district: "Karaköy",
        side: "avrupa",
        icon: "🖼️",
        description: "Modern ve çağdaş sanat müzesi.",
        lat: 41.0257,
        lng: 28.9844
    },

    {
        id: "dolmabahce",
        name: "Dolmabahçe Sarayı",
        district: "Beşiktaş",
        side: "avrupa",
        icon: "🏰",
        description: "Boğaz kıyısında bulunan tarihi saray.",
        lat: 41.0390,
        lng: 29.0007
    },

    {
        id: "ortakoy",
        name: "Ortaköy",
        district: "Beşiktaş",
        side: "avrupa",
        icon: "🌉",
        description: "Boğaz ve köprü manzarasıyla ünlü.",
        lat: 41.0472,
        lng: 29.0271
    },

    {
        id: "rumeli",
        name: "Rumeli Hisarı",
        district: "Sarıyer",
        side: "avrupa",
        icon: "🏰",
        description: "Boğaz'ın Avrupa yakasındaki tarihi hisar.",
        lat: 41.0848,
        lng: 29.0560
    },

    {
        id: "emirgan",
        name: "Emirgan Korusu",
        district: "Sarıyer",
        side: "avrupa",
        icon: "🌳",
        description: "Boğaz manzaralı tarihi koru.",
        lat: 41.1066,
        lng: 29.0536
    },

    {
        id: "miniatürk",
        name: "Miniatürk",
        district: "Beyoğlu",
        side: "avrupa",
        icon: "🏞️",
        description: "Türkiye'nin önemli eserlerinin minyatürleri.",
        lat: 41.0605,
        lng: 28.9490
    },

    {
        id: "pierreloti",
        name: "Pierre Loti Tepesi",
        district: "Eyüpsultan",
        side: "avrupa",
        icon: "☕",
        description: "Haliç manzarasıyla ünlü seyir noktası.",
        lat: 41.0548,
        lng: 28.9334
    },

    {
        id: "kapalicarsi",
        name: "Kapalıçarşı",
        district: "Fatih",
        side: "avrupa",
        icon: "🛍️",
        description: "Tarihi çarşı ve alışveriş merkezi.",
        lat: 41.0108,
        lng: 28.9680
    },

    {
        id: "misircarsisi",
        name: "Mısır Çarşısı",
        district: "Fatih",
        side: "avrupa",
        icon: "🛍️",
        description: "Eminönü'ndeki tarihi çarşı.",
        lat: 41.0166,
        lng: 28.9709
    },

    {
        id: "gulhane",
        name: "Gülhane Parkı",
        district: "Fatih",
        side: "avrupa",
        icon: "🌳",
        description: "Topkapı Sarayı'nın yanında tarihi park.",
        lat: 41.0131,
        lng: 28.9813
    },

    {
        id: "belgrad",
        name: "Belgrad Ormanı",
        district: "Sarıyer",
        side: "avrupa",
        icon: "🌲",
        description: "İstanbul'un önemli ormanlık alanlarından.",
        lat: 41.1802,
        lng: 28.9666
    },

    {
        id: "ataturk-arboretumu",
        name: "Atatürk Arboretumu",
        district: "Sarıyer",
        side: "avrupa",
        icon: "🌲",
        description: "Doğa ve yürüyüş için önemli alan.",
        lat: 41.1714,
        lng: 28.9704
    },


    /* ======================================================
       ANADOLU YAKASI
       ====================================================== */

    {
        id: "kizkulesi",
        name: "Kız Kulesi",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🗼",
        description: "Boğaz'ın en önemli simgelerinden.",
        lat: 41.0211,
        lng: 29.0041
    },

    {
        id: "uskudar",
        name: "Üsküdar Sahili",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🌊",
        description: "Kız Kulesi ve tarihi yarımada manzarası.",
        lat: 41.0256,
        lng: 29.0155
    },

    {
        id: "camlica",
        name: "Çamlıca Tepesi",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🌆",
        description: "Panoramik İstanbul manzarası.",
        lat: 41.0262,
        lng: 29.0688
    },

    {
        id: "camlica-kulesi",
        name: "Çamlıca Kulesi",
        district: "Üsküdar",
        side: "anadolu",
        icon: "📡",
        description: "İstanbul'un yüksek seyir noktalarından.",
        lat: 41.0170,
        lng: 29.0687
    },

    {
        id: "beylerbeyi",
        name: "Beylerbeyi Sarayı",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🏛️",
        description: "Boğaz kıyısındaki tarihi saray.",
        lat: 41.0424,
        lng: 29.0419
    },

    {
        id: "kuzguncuk",
        name: "Kuzguncuk",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🏘️",
        description: "Tarihi evleri ve sakin sokaklarıyla ünlü.",
        lat: 41.0344,
        lng: 29.0312
    },

    {
        id: "fethipasa",
        name: "Fethi Paşa Korusu",
        district: "Üsküdar",
        side: "anadolu",
        icon: "🌳",
        description: "Boğaz manzaralı yeşil alan.",
        lat: 41.0314,
        lng: 29.0384
    },

    {
        id: "anadoluhisari",
        name: "Anadolu Hisarı",
        district: "Beykoz",
        side: "anadolu",
        icon: "🏰",
        description: "Boğaz'ın Anadolu yakasındaki tarihi hisar.",
        lat: 41.0820,
        lng: 29.0678
    },

    {
        id: "mihrabat",
        name: "Mihrabat Korusu",
        district: "Beykoz",
        side: "anadolu",
        icon: "🌳",
        description: "Boğaz manzaralı tarihi koru.",
        lat: 41.0932,
        lng: 29.0736
    },

    {
        id: "kanlica",
        name: "Kanlıca",
        district: "Beykoz",
        side: "anadolu",
        icon: "🥣",
        description: "Yoğurdu ve Boğaz manzarasıyla ünlü.",
        lat: 41.1047,
        lng: 29.0657
    },

    {
        id: "beykoz",
        name: "Beykoz Sahili",
        district: "Beykoz",
        side: "anadolu",
        icon: "🌊",
        description: "Boğaz'ın doğal güzellikleriyle öne çıkan bölgesi.",
        lat: 41.1270,
        lng: 29.0960
    },

    {
        id: "polonezkoy",
        name: "Polonezköy",
        district: "Beykoz",
        side: "anadolu",
        icon: "🌲",
        description: "Doğa ve yürüyüş için popüler bölge.",
        lat: 41.1128,
        lng: 29.2131
    },

    {
        id: "kadikoy",
        name: "Kadıköy Çarşı",
        district: "Kadıköy",
        side: "anadolu",
        icon: "🛍️",
        description: "İstanbul'un canlı çarşı bölgelerinden.",
        lat: 40.9909,
        lng: 29.0277
    },

    {
        id: "moda",
        name: "Moda Sahili",
        district: "Kadıköy",
        side: "anadolu",
        icon: "🌊",
        description: "Yürüyüş ve deniz manzarası için popüler.",
        lat: 40.9840,
        lng: 29.0265
    },

    {
        id: "caddebostan",
        name: "Caddebostan Sahili",
        district: "Kadıköy",
        side: "anadolu",
        icon: "🌊",
        description: "Marmara kıyısında popüler yürüyüş alanı.",
        lat: 40.9639,
        lng: 29.0677
    },

    {
        id: "suadiye",
        name: "Suadiye",
        district: "Kadıköy",
        side: "anadolu",
        icon: "🌴",
        description: "Bağdat Caddesi ve sahil bölgesi.",
        lat: 40.9597,
        lng: 29.0864
    },

    {
        id: "bagdat",
        name: "Bağdat Caddesi",
        district: "Kadıköy",
        side: "anadolu",
        icon: "🛍️",
        description: "Alışveriş ve şehir yaşamıyla ünlü cadde.",
        lat: 40.9622,
        lng: 29.0788
    },

    {
        id: "aydos",
        name: "Aydos Ormanı",
        district: "Kartal",
        side: "anadolu",
        icon: "🌲",
        description: "Doğa yürüyüşü ve piknik için uygun.",
        lat: 40.9675,
        lng: 29.2325
    }

];


/* ==========================================================
   DOM
   ========================================================== */

const screens =
    document.querySelectorAll(".screen");

const backButton =
    document.getElementById("backButton");

const headerHomeButton =
    document.getElementById("headerHomeButton");

const quickCards =
    document.querySelectorAll(".quick-card");

const menuElements =
    document.querySelectorAll("[data-menu]");

const navItems =
    document.querySelectorAll("[data-nav]");

const serviceCards =
    document.querySelectorAll(".service-card");

const placesList =
    document.getElementById("placesList");

const featuredPlaces =
    document.getElementById("featuredPlaces");

const placesSearch =
    document.getElementById("placesSearch");

const filterButtons =
    document.querySelectorAll(".filter-button");

const modal =
    document.getElementById("placeModal");

const closeModal =
    document.getElementById("closeModal");

const modalIcon =
    document.getElementById("modalIcon");

const modalSide =
    document.getElementById("modalSide");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalMapButton =
    document.getElementById("modalMapButton");

const modalDirectionButton =
    document.getElementById("modalDirectionButton");

const mapSearch =
    document.getElementById("mapSearch");

const locateButton =
    document.getElementById("locateButton");

const mapPlaceCount =
    document.getElementById("mapPlaceCount");


/* ==========================================================
   STATE
   ========================================================== */

let currentScreen =
    "homeScreen";

let map =
    null;

let mapReady =
    false;

let markers =
    [];

let selectedPlace =
    null;

let activeFilter =
    "all";

let favorites =
    JSON.parse(
        localStorage.getItem("istanbulSendeFavorites") || "[]"
    );


/* ==========================================================
   HELPERS
   ========================================================== */

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function isFavorite(id) {

    return favorites.includes(id);

}


function saveFavorites() {

    localStorage.setItem(
        "istanbulSendeFavorites",
        JSON.stringify(favorites)
    );

}


/* ==========================================================
   SCREEN NAVIGATION
   ========================================================== */

function showScreen(screenId) {

    const target =
        document.getElementById(screenId);

    if (!target) {
        return;
    }


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    target.classList.add("active");


    currentScreen =
        screenId;


    if (screenId === "homeScreen") {

        backButton.classList.add("hidden");

    } else {

        backButton.classList.remove("hidden");

    }


    updateNavigation();


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (screenId === "mapScreen") {

        setTimeout(() => {

            initializeMap();

            if (map) {
                map.invalidateSize();
            }

        }, 120);

    }

}


function updateNavigation() {

    navItems.forEach(item => {

        item.classList.remove("active");

        if (
            item.dataset.nav === currentScreen
        ) {

            item.classList.add("active");

        }

    });

}


/* ==========================================================
   ANA MENÜ
   ========================================================== */

menuElements.forEach(element => {

    element.addEventListener(
        "click",
        () => {

            const menu =
                element.dataset.menu;


            if (!menu) {
                return;
            }


            if (menu === "map") {

                showScreen("mapScreen");

                return;

            }


            showScreen(
                menu + "Screen"
            );

        }
    );

});


/* ==========================================================
   ALT NAVİGASYON
   ========================================================== */

navItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            showScreen(
                item.dataset.nav
            );

        }
    );

});


/* ==========================================================
   HEADER HOME
   ========================================================== */

headerHomeButton.addEventListener(
    "click",
    () => {

        showScreen("homeScreen");

    }
);


/* ==========================================================
   GERİ
   ========================================================== */

backButton.addEventListener(
    "click",
    () => {

        showScreen("homeScreen");

    }
);


/* ==========================================================
   SERVİS BUTONLARI
   ========================================================== */

serviceCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const url =
                card.dataset.url;

            const action =
                card.dataset.action;


            if (action === "map") {

                showScreen("mapScreen");

                return;

            }


            if (url) {

                window.open(
                    url,
                    "_blank",
                    "noopener,noreferrer"
                );

            }

        }
    );

});


/* ==========================================================
   FEATURED PLACES
   ========================================================== */

const featuredIds = [

    "ayasofya",
    "galata",
    "dolmabahce",
    "kizkulesi",
    "camlica",
    "rumeli"

];


function renderFeaturedPlaces() {

    featuredPlaces.innerHTML = "";


    featuredIds.forEach(id => {

        const place =
            places.find(
                item => item.id === id
            );


        if (!place) {
            return;
        }


        const card =
            document.createElement("article");

        card.className =
            "featured-card";


        card.innerHTML = `

            <div class="featured-art">

                <div class="featured-landmark">
                    ${escapeHtml(place.icon)}
                </div>

            </div>

            <div class="featured-content">

                <small>
                    ${place.side === "avrupa"
                        ? "AVRUPA YAKASI"
                        : "ANADOLU YAKASI"}
                </small>

                <strong>
                    ${escapeHtml(place.name)}
                </strong>

                <span>
                    ${escapeHtml(place.district)}
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                openPlaceModal(place);

            }
        );


        featuredPlaces.appendChild(card);

    });

}


renderFeaturedPlaces();


/* ==========================================================
   PLACES
   ========================================================== */

function renderPlaces() {

    placesList.innerHTML = "";


    const searchValue =
        placesSearch
            ? placesSearch.value
                .trim()
                .toLocaleLowerCase("tr-TR")
            : "";


    let filtered =
        places.filter(place => {


            if (
                activeFilter === "avrupa" ||
                activeFilter === "anadolu"
            ) {

                if (
                    place.side !== activeFilter
                ) {

                    return false;

                }

            }


            if (
                activeFilter === "favorites"
            ) {

                if (
                    !isFavorite(place.id)
                ) {

                    return false;

                }

            }


            if (searchValue) {

                const text = (

                    place.name +
                    " " +
                    place.district +
                    " " +
                    place.description

                ).toLocaleLowerCase(
                    "tr-TR"
                );


                if (
                    !text.includes(searchValue)
                ) {

                    return false;

                }

            }


            return true;

        });


    if (!filtered.length) {

        placesList.innerHTML = `

            <div style="
                grid-column:1/-1;
                padding:35px 20px;
                text-align:center;
                color:#71869a;
                font-size:11px;
            ">

                🔎<br><br>
                Aradığınız kriterlere uygun
                bir yer bulunamadı.

            </div>

        `;

        return;

    }


    filtered.forEach(place => {

        const card =
            document.createElement("article");

        card.className =
            "place-card";


        card.innerHTML = `

            <div class="place-card-art">

                <span>
                    ${escapeHtml(place.icon)}
                </span>

            </div>


            <button
                class="favorite-button ${
                    isFavorite(place.id)
                        ? "favorite"
                        : ""
                }"
                aria-label="Favori"
            >
                ${
                    isFavorite(place.id)
                        ? "♥"
                        : "♡"
                }
            </button>


            <div class="place-card-content">

                <small>
                    ${escapeHtml(place.district)}
                </small>

                <h3>
                    ${escapeHtml(place.name)}
                </h3>

                <p>
                    ${escapeHtml(place.description)}
                </p>

                <span class="place-side-tag">

                    ${
                        place.side === "avrupa"
                            ? "Avrupa Yakası"
                            : "Anadolu Yakası"
                    }

                </span>

            </div>

        `;


        const favoriteButton =
            card.querySelector(
                ".favorite-button"
            );


        favoriteButton.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                toggleFavorite(
                    place.id
                );

            }
        );


        card.addEventListener(
            "click",
            () => {

                openPlaceModal(place);

            }
        );


        placesList.appendChild(card);

    });

}


renderPlaces();


/* ==========================================================
   FILTER
   ========================================================== */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                item =>
                    item.classList.remove(
                        "active"
                    )
            );


            button.classList.add(
                "active"
            );


            activeFilter =
                button.dataset.filter;


            renderPlaces();

        }
    );

});


/* ==========================================================
   SEARCH
   ========================================================== */

if (placesSearch) {

    placesSearch.addEventListener(
        "input",
        () => {

            renderPlaces();

        }
    );

}


/* ==========================================================
   FAVORITES
   ========================================================== */

function toggleFavorite(id) {

    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    saveFavorites();

    renderPlaces();

}


window.addEventListener(
    "storage",
    () => {

        favorites =
            JSON.parse(
                localStorage.getItem(
                    "istanbulSendeFavorites"
                ) || "[]"
            );

        renderPlaces();

    }
);


/* ==========================================================
   PLACE MODAL
   ========================================================== */

function openPlaceModal(place) {

    selectedPlace =
        place;


    modalIcon.textContent =
        place.icon;


    modalSide.textContent =
        place.side === "avrupa"
            ? `${place.district.toUpperCase()} · AVRUPA YAKASI`
            : `${place.district.toUpperCase()} · ANADOLU YAKASI`;


    modalTitle.textContent =
        place.name;


    modalDescription.textContent =
        place.description;


    modalDirectionButton.href =
        `https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}`;


    modal.classList.add(
        "open"
    );

}


function closePlaceModal() {

    modal.classList.remove(
        "open"
    );

}


closeModal.addEventListener(
    "click",
    closePlaceModal
);


modal
    .querySelector(".modal-backdrop")
    .addEventListener(
        "click",
        closePlaceModal
    );


modalMapButton.addEventListener(
    "click",
    () => {

        if (!selectedPlace) {
            return;
        }


        closePlaceModal();


        showScreen(
            "mapScreen"
        );


        setTimeout(() => {

            initializeMap();

            openPlaceOnMap(
                selectedPlace
            );

        }, 200);

    }
);


/* ==========================================================
   MAP
   ========================================================== */

function initializeMap() {

    if (mapReady) {
        return;
    }


    if (
        typeof L === "undefined"
    ) {

        console.error(
            "Leaflet yüklenemedi."
        );

        return;

    }


    map =
        L.map(
            "map",
            {
                zoomControl: true
            }
        )
        .setView(
            [41.0082, 28.9784],
            11
        );


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            maxZoom: 19,

            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
        }
    ).addTo(map);


    addMarkers();


    mapReady =
        true;


    mapPlaceCount.textContent =
        places.length;

}


/* ==========================================================
   MAP MARKERS
   ========================================================== */

function addMarkers() {

    markers = [];


    places.forEach(place => {

        const european =
            place.side === "avrupa";


        const marker =
            L.circleMarker(
                [place.lat, place.lng],
                {
                    radius: 7,

                    color: "#ffffff",

                    weight: 2,

                    fillColor:
                        european
                            ? "#2787df"
                            : "#10a58e",

                    fillOpacity: .95
                }
            );


        marker.placeData =
            place;


        marker.bindPopup(`

            <div class="popup-title">

                ${escapeHtml(place.icon)}
                ${escapeHtml(place.name)}

            </div>

            <div class="popup-info">

                ${escapeHtml(place.district)}
                ·
                ${
                    european
                        ? "Avrupa Yakası"
                        : "Anadolu Yakası"
                }

            </div>

            <p style="
                margin-top:7px;
                font-size:9px;
                color:#64748b;
                line-height:1.5;
            ">

                ${escapeHtml(place.description)}

            </p>

            <a
                class="popup-link"
                href="https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}"
                target="_blank"
                rel="noopener noreferrer"
            >
                🧭 Yol Tarifi
            </a>

        `);


        marker.addTo(map);


        marker.on(
            "click",
            () => {

                selectedPlace =
                    place;

            }
        );


        markers.push(
            marker
        );

    });

}


/* ==========================================================
   OPEN PLACE ON MAP
   ========================================================== */

function openPlaceOnMap(place) {

    if (!map) {
        return;
    }


    map.setView(
        [place.lat, place.lng],
        16,
        {
            animate: true
        }
    );


    const marker =
        markers.find(
            item =>
                item.placeData.id ===
                place.id
        );


    if (marker) {

        marker.openPopup();

    }

}


/* ==========================================================
   MAP SEARCH
   ========================================================== */

if (mapSearch) {

    mapSearch.addEventListener(
        "input",
        () => {

            const query =
                mapSearch.value
                    .trim()
                    .toLocaleLowerCase(
                        "tr-TR"
                    );


            markers.forEach(
                marker => {

                    const place =
                        marker.placeData;


                    const text = (

                        place.name +
                        " " +
                        place.district +
                        " " +
                        place.description

                    ).toLocaleLowerCase(
                        "tr-TR"
                    );


                    if (
                        !query ||
                        text.includes(query)
                    ) {

                        marker.setStyle({

                            opacity: 1,

                            fillOpacity: .95,

                            radius: 8

                        });

                    } else {

                        marker.setStyle({

                            opacity: .12,

                            fillOpacity: .12,

                            radius: 5

                        });

                    }

                }
            );


            if (query) {

                const found =
                    places.find(
                        place => {

                            const text = (

                                place.name +
                                " " +
                                place.district

                            ).toLocaleLowerCase(
                                "tr-TR"
                            );


                            return text.includes(
                                query
                            );

                        }
                    );


                if (
                    found &&
                    map
                ) {

                    map.setView(
                        [
                            found.lat,
                            found.lng
                        ],
                        15
                    );

                }

            }

        }
    );

}


/* ==========================================================
   USER LOCATION
   ========================================================== */

locateButton.addEventListener(
    "click",
    () => {

        if (
            !navigator.geolocation
        ) {

            alert(
                "Tarayıcınız konum özelliğini desteklemiyor."
            );

            return;

        }


        navigator.geolocation.getCurrentPosition(

            position => {

                const lat =
                    position.coords.latitude;

                const lng =
                    position.coords.longitude;


                map.setView(
                    [lat, lng],
                    14
                );


                L.marker(
                    [lat, lng]
                )
                .addTo(map)
                .bindPopup(
                    "📍 Bulunduğunuz konum"
                )
                .openPopup();

            },

            () => {

                alert(
                    "Konumunuz alınamadı. Tarayıcı konum iznini kontrol edin."
                );

            },

            {
                enableHighAccuracy: true,

                timeout: 10000,

                maximumAge: 60000
            }

        );

    }
);


/* ==========================================================
   ESC KEY
   ========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePlaceModal();


            if (
                currentScreen !==
                "homeScreen"
            ) {

                showScreen(
                    "homeScreen"
                );

            }

        }

    }
);


/* ==========================================================
   WINDOW LOAD
   ========================================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "İstanbul Sende hazır."
        );

    }
);
