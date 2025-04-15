//Joanna Tan, SEA Project Assessment 2025

//dance studio logos
const GRACE_URL =
  "https://images.squarespace-cdn.com/content/668c51a2b29a2c6e2ba9e145/1720471984995-94J1UOIK5T5WT6SNA59H/LA+JPEG.jpg?format=1500w&content-type=image%2Fjpeg";
const LOS_ANGELES_BALLET_URL =
  "https://www.laballetacademy.com/wp-content/uploads/2021/07/LABA-logo250-x-250.png";
const WEST_LA_URL =
  "https://images.squarespace-cdn.com/content/v1/64a4be2ae22ab3529f6e535f/52d17395-80b1-4eb0-8bf0-aede27e44fc9/933A3411.jpg";
const WESTSIDE_URL =
  "https://westsideballet.com/wp-content/uploads/2021/06/Studio.jpeg";
const ALIGN_URL =
  "https://alignballetmethod.com/wp-content/uploads/2021/09/LOGOfin.jpg";
const MARAT_URL =
  "https://theater.maratdaukayev.org/wp-content/uploads/2022/11/smallbox.png";
const COLBURN_URL =
  "https://aec-music.eu/storage/members/logo-colbun_20160630164345.png";
const STUDIO_A_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj-bRTyk7jrj8wgMO0WzlRkLf5FeFfket8IA&s";
const ATHLETIC_GARAGE_URL =
  "https://www.athleticgarage.com/wp-content/uploads/2019/01/AGDC_Hamburger_Logo.png";
const TMILLY_URL =
  "https://static.wixstatic.com/media/723c08_ad2b0d9fbd674f3abd731f347b774c2f~mv2.png/v1/fill/w_300,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/TMilly%20Studio%20(app%20icon)%20full%20res.png";
const MILLENIUM_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHVaSQQ5sjajSnYVFiJffW9Hz9mhe2xIlpaA&s";

  //dance studio data
  const studios = [
    {
    name: "Grace Ballet Los Angeles",
    image: GRACE_URL,
    location: "Westside",
    address: "12952 W Washington Blvd, Los Angeles, CA 90066",
    price: "$32/class",
    discounts: "Multi-class packs available",
    registerHere: "https://www.graceballetlosangeles.com/adult-classes",
    phone: "(917) 705-2072",
    parking: "~"

    },
    {
    name: "Los Angeles Ballet",
    image: LOS_ANGELES_BALLET_URL,
    location: "Westside",
    address: "11755 Exposition Blvd, Los Angeles, CA 90064",
    price: "$0/FREE",
    registerHere: "https://www.losangelesballet.org/a-chance-to-dance",
    phone: "(310) 477-7411",
    parking: "Street or Paid Parking only",

    },
    {
    name: "West LA Academy of Dance",
    image: WEST_LA_URL,
    location: "Westside",
    address: "12422 Santa Monica Blvd. Los Angeles, CA 90025",
    price: "$25/class",
    discounts: "Multi-class packs available; $105/5 classes",
    registerHere: "https://www.wladance.com/adult-classes",
    phone: "(310)706-9890 ",
    parking: "Street or Paid Parking only",

    },
    {
    name: "Westside School of Ballet",
    image: WESTSIDE_URL,
    location: "Westside",
    address: "1709 Stewart Street, Santa Monica, CA 90404",
    price: "$25/class",
    discounts: "College and Professional Rates Available. Multi-class packs available, $18-$24/class ",
    registerHere:"https://clients.mindbodyonline.com/classic/ws?studioid=199866&stype=-98",
    phone: "(310)828-2018",
    parking: "Front Parking Spots Marked 'Ballet' or Street Parking only.",

    },
    {
    name: "Align Ballet Method",
    image: ALIGN_URL,
    location: "Mid-Wilshire",
    address: "6085 W. Pico Blvd, Los Angeles CA 90035",
    price: "$25/class",
    registerHere: "https://alignballetmethod.com/product/weekday-main-location-open-adult-los-angeles-ballet-classes/.  https://alignballetmethod.com/product/weekend-main-location-open-adult-los-angeles-ballet-classes/",
    phone: "(323) 424-7822",
    parking: "~"
    },
    {
    name: "Marat Daukayev School of Ballet",
    image: MARAT_URL,
    location: "Koreatown",
    address: "Equitable Plaza, 2nd Floor, 3435 Wilshire Blvd, Los Angeles, CA 90010",
    price: "$27/class",
    discounts: "$22-24/class with multi-class package. Senior citizen discounts available.",
    registerHere: "https://app.jackrabbitclass.com/eventcalendar.asp?orgid=506009",
    phone: "(323) 965-0333",
    parking: "Parking Structure-$5 after 5pm weekdays, otherwise $$ unless validated.",

    },
    {
    name: "Colburn School",
    image: COLBURN_URL,
    location: "Downtown",
    address: "200 South Grand Avenue, Los Angeles, CA 90012",
    price: "$380-$390/collegiate semester",
    registerHere: "https://colburnschool.edu/youth-dance-programs/programs/adult-classes/",
    phone: "(213)621-2200",
    parking: "Walt Disney Concert Hall Garage: Weekdays after 4:30 pm, 2 hours before matinee performances, and weekends all day: $10 flate rate. Regular rates: $3.50 per 15 minutes, $20 maximum. Enter on 2nd Street or Lower Grand Avenue",

    },
    {
    name: "Studio A Dance",
    image: STUDIO_A_URL,
    location: "Silver Lake",
    address: "2306 HYPERION AVE. LOS ANGELES, CA 90027",
    price: "~$20/class, dependent on instructor",
    registerHere:"https://www.studioadance.com/adult-schedule",
    phone: "GENERAL INQUIRIES: (323) 661-8311. RAPID RESPONSE [TEXT ONLY]: (818)-383-2650",
    parking: "Street Parking (Located Rear of Hyperion Arts Building)",

    },
    {
    name: "Athletic Garage Dance Studio",
    image: ATHLETIC_GARAGE_URL,
    location: "Pasadena",
    address: "121 Waverly Dr., Pasadena, CA 91105",
    price: "$18+/class ",
    discounts: "multi-class and monthly pass available",
    registerHere: "https://www.athleticgarage.com/adult-classes/",
    phone: "(626) 229-9769",
    parking:" Parking lot and street parking.",

    },
    {
    name: "TMilly Studio",
    image: TMILLY_URL,
    location: "The Valley",
    address: "5348 Cleon Ave, North Hollywood, CA 91601",
    price: "$22/class",
    discounts: "multi-class packages $18-$19/class",
    registerHere: "https://www.tmillystudio.com/class-schedule",
    phone: "(818) 271-0931",
    parking: "Parking lot and street parking",

    },
    {
    name: "Millenium Dance Complex",
    image: MILLENIUM_URL,
    location: "The Valley",
    address: "11528 Ventura Blvd Studio City, CA 91604",
    price: "$22/class",
    discounts: "$20-$21/class with multi-class pack",
    registerHere: "https://www.millenniumdancecomplex.com/general-8-1",
    phone: "(818) 753-5081",
    parking:"Parking lot and street parking",

    },
];

//search bar function
let searchQuery = "";

function searchStudios() {
  searchQuery = document.getElementById("search-input").value.toLowerCase();
  showCards();
}

let priceFilter = "all"; // Default filter is "All Prices"

// This function will be triggered when the price dropdown is changed
function filterByPrice() {
  priceFilter = document.getElementById("price-filter").value;
  showCards();
}

// This function adds cards to the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  //for search bar
  const filteredStudios = studios.filter(studio => {
    const matchesSearchQuery =  studio.name.toLowerCase().includes(searchQuery) ||
                                studio.location.toLowerCase().includes(searchQuery) ||
                                studio.address.toLowerCase().includes(searchQuery) ||
                                studio.phone.toLowerCase().includes(searchQuery) ||
                                studio.price.toLowerCase().includes(searchQuery)||
                                studio.discounts.toLowerCase().includes(searchQuery);
      

  const matchesPriceFilter = filterByPriceRange(studio.price);
  return matchesSearchQuery && matchesPriceFilter;
});

  //no results found
  if (filteredStudios.length == 0) {
    cardContainer.innerHTML = "<p> No studios found. :/ Try again? </p>";
    return;
  }


  for (let i = 0; i < filteredStudios.length; i++) {
    const studio = filteredStudios[i];

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, studio); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}
function filterByPriceRange(price) {
    const priceRange = priceFilter;
    let priceValue = price.replace(/[^\d.-]/g, ''); // Remove non-numeric characters

    // Convert price string to a number
    priceValue = parseFloat(priceValue);

  switch (priceRange) {
    case "0-20":
      return priceValue <= 20;
    case "21-30":
      return priceValue > 20 && priceValue <= 30;
    case "31-40":
      return priceValue > 30 && priceValue <= 40;
    case "40+":
      return priceValue > 40;
    default:
      return true; // Show all studios if no price filter is applied
  }
}

function editCardContent(card, studio) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = studio.name;

  const cardImage = card.querySelector("img");
  cardImage.src = studio.image
  cardImage.alt = `${studio.name} Logo`; 

  const infoList = card.querySelector("ul");
  infoList.innerHTML = `
    <li><strong>Location:</strong> ${studio.location}</li>
    <li><strong>Address:</strong> ${studio.address}</li>
    <li><strong>Price:</strong> ${studio.price}</li>
    <li><strong>Discounts:</strong> ${studio.discounts}</li>
    <li><strong>Phone:</strong> ${studio.phone}</li>
    <li><strong>Parking:</strong> ${studio.parking}</li>
    <li><strong>Register:</strong> <a href="${studio.registerHere}" target="_blank"> Click Here! </a></li>
  `;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", studio, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);


//buttontimebuttontimebuttontimebuttontime

function feelingLucky() {
    console.log("Button Clicked!");
    const randomIndex = Math.floor(Math.random() * studios.length);
    const luckyStudio = studios[randomIndex];
    alert(`Try: ${luckyStudio.name}\n Location: ${luckyStudio.location}\n\n Register here: \n${luckyStudio.registerHere}`
    )
}

function leaveFeedback() {
    console.log("Button Clicked!");
    const googleForm = "https://docs.google.com/forms/d/e/1FAIpQLSfPG3n6DMinW0f485cuKeEZQ6cG2Hhxyaum1iX7xUF2FuirtQ/viewform?usp=dialog";
    window.location.href = googleForm;
}