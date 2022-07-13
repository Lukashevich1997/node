import { SHA3 } from 'sha3';
import fs from 'fs-es6'
import "@babel/polyfill";

const arr = [];
const mail = 'ldms7@mail.ru';

fs.readdir('files', function(err, items) {  
  //console.log(items);
  for (let i=0; i<items.length; i++) {      
    
    let path = 'files' + '/' + items[i]; 
    //console.log(path);
    let fileBuffer = fs.readFileSync(path);
    let hash = new SHA3(256);
    let Hex = hash.update(fileBuffer).digest('hex');
    arr.push(Hex);    
  }  
  //console.log(arr);
  arr.sort();
  //console.log(arr);  
  let str = arr.join('');
  //console.log(str);   
  let finalStr = str + mail;
  //console.log(finalStr);
  let hashF = new SHA3(256);
  let HexFinal = hashF.update(finalStr).digest('hex');
  console.log(HexFinal);
});

