/**
 * valores false's
 * false
 * 0
 * '' 
 * ""
 * null
 * undefined
 * NaN
 */

 console.log('Marcelo' && 0 && 'Pereira');
 console.log('Marcelo' && 1 && 'Pereira');
 console.log('Marcelo' && "" && 'Pereira');
 console.log('Marcelo' && null && 'Pereira');
 console.log('Marcelo' && null && 'Pereira');
 
let vaiExecutar = false;

function falaOi(){
    return 'Oi';
}

console.log(vaiExecutar && falaOi());

vaiExecutar = true;
console.log(vaiExecutar && falaOi());

console.log('Marcelo' || null || 'Pereira');
console.log('Marcelo' || 0 || 'Pereira');
console.log('Marcelo' || '' || 'Pereira');

console.log(vaiExecutar || falaOi());
vaiExecutar = false;
console.log(vaiExecutar || falaOi());

let corUser = null;
console.log(corUser || 'red');
corUser = 'black';
console.log(corUser || 'red');
   
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;
console.log(a || b || c || d || e);

