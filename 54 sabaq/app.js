const API = 'https://restcountries.com/v3.1/alla';

const getDatas = async(resurse)=>{
    console.log("Loading !!!");
    
     const request = await fetch(resurse)
     const data = await request.json()
    if(request.status != 200){
        throw new Error(`Error: ${request.status} - ${request.statusText}`);
    }
     console.log(data);
     console.log("Done !!!");
     
}
getDatas(API)
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})