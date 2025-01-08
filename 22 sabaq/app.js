// Block scope

let age = 24 // global scope 

if(true){
    let age = 25
    let ism = 'Ahror'
    console.log(`Ifning ichidagi scope `,age,ism);

    if(true){
        console.log('Ikkinchi if ichi:', age );
        
    }

}

console.log('Tashqo tomondagi scope', age, );

{
    let a = 1;
    console.log(a);
}

let joy = 'Toshkent'

{
    
    {
        let joy = 'Qonirot'
        
    }
    console.log(joy);
}