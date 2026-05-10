const dayElement = document.getElementById("day");
const poemElement = document.getElementById("poem");
const days =[
    {
        name: "Sunday",
        background: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
        poem: "Stars rest quietly above,\nDreams float through the silent night."
    },
    {
        name: "Monday",
        background: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
        poem: "A new begining whispers softly,\nThe sky wakes with quiet light."
    },
    {
        name: "Tuesday",
        background: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        poem: "Golden sunlight fills the air,\nHope walks gently everywhere."
    },
    {
        name: "Wednsday",
        background: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
        poem: "Forest winds being to sing,\nPeace arrives on silent wings."
    },
    {
        name: "Thursday",
        background: "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
        poem: "City lights and midnight skies,\nThoufhts awaken, spirits rise."
    },
    {
        name: "Friday",
        background: "https://images.unsplash.com/photo-1499084732479-de2c02d45fc4",
        poem: "Neon dreams and endless sound,\nWeekend magic spins around."
    },
    {
        name: "saturday",
        background: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        poem: "Ocean waves and golden sand,\nFreedom dances through the land"
    },
];
const today = new Date().getDay();  //comment this line and uncomment the next line to change days.
//const today = 0;                  // change days by chainging number 0 through 6.
const currentDay = days[today];
dayElement.textContent = currentDay.name;
poemElement.innerHTML = currentDay.poem.replace(/\n/g, "<br>");
document.body.style.backgroundImage = `url('${currentDay.background}')`;