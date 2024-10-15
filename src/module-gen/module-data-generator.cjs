const fs = require('fs');

let names = [];                        // tablica z obiektami 

fs.readFile('./src/module-gen/names.txt', 'utf8', (err, data) => {
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
        const birthDate=new Date (Date.now())
        const Eyes="blue";

        const obj={
            id:i+1,
            name:name,
            birth:birthDate,
            eyes:Eyes
        }
        content+=JSON.stringify(obj)+(i<count-1 ? ',\n':"");
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/module-gen/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});