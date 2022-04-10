const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBnt = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json[0].url;
    } catch(e) {
        console.log(e.message);
    }
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBnt.addEventListener('click', loadImg);
loadImg();