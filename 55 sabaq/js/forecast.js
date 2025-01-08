const KEY = '96b947a45d33d7dc1c49af3203966408';

const getData = async (city) => {
    const base = "http://api.openweathermap.org/data/2.5/weather";
    const query = `?q=${city}&units=metric&appid=${KEY}`;
    loader(true)
    const req = await fetch(base + query);
    const data = await req.json();
    loader(false)
    return data;
}

getData('London')
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
