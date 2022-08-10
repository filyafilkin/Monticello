// Splide

document.addEventListener("DOMContentLoaded", function () {
  let heroSplide = new Splide("#hero-splide", {
    type: "loop",
    cover: true,
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 5000,
    arrows: false,
    paginationDirection: "ttb",
    rewind: true,
    width: "100vw",
    height: "100vh",
    dragable: false,
    classes: {
      pagination: "splide__pagination hero-splide__pagination",
      page: "splide__pagination__page hero-splide__page",
    },
  });

  let newsSplide = new Splide("#news-splide", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    rewind: true,
    autoplay: true,
    interval: 3000,
    gap: 30,
    pagination: true,
    dragable: false,
    classes: {
      pagination: "splide__pagination news-splide__pagination",
      page: "splide__pagination__page news-splide__page",
    },
  });

  heroSplide.mount();
  newsSplide.mount();
});

// Map

function initMap(newLat, newLng) {
  const uluru = { lat: newLat, lng: newLng };
  const center = { lat: 50.446085851396404, lng: 30.508701978448553 };
  const kyiv = { lat: 50.44729011555056, lng: 30.509028180851566 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: center,
    disableDefaultUI: true,
  });

  const svgMarker = {
    path: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z",
    fillColor: "#7e5aff",
    fillOpacity: 0.9,
    strokeWeight: 0,
    rotation: 0,
    scale: 1,
    anchor: new google.maps.Point(15, 30),
  };

  new google.maps.Marker({
    position: kyiv,
    icon: svgMarker,
    map: map,
    title: "We are here!",
  });
}

window.initMap = initMap(50.44729011555056, 30.509028180851566);
