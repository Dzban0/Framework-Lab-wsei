const fs = require('fs');

let names = [];                        // tablica z obiektami 

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    const count=names.length;
    console.log(names);
   
    let content = "export const data = [";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        const name = names[Math.floor(Math.random() * names.length)]
        const birthDate=new Date(Date.now() - Math.random() * (60 * 60 * 24 * 365 * 80 * 1000));
        const Eyes="blue";

        const obj={
            id:i+1,
            name:name,
            birth: birthDate.toISOString().split('T')[0], // YYYY-MM-DD
            eyes:Eyes,
            rating:0
        }
        content+=JSON.stringify(obj)+(i<count-1 ? ',\n':"");
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});