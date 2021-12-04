import fx from './index.js';
const argLoader = () => {
    let rawargs = process
        .argv
        .filter(v => v.includes('='));
    let argObj: {[key: string]: any} = {};
    for (let a = 0; a < rawargs.length; a++) {
        let [ key, val ] = rawargs[a].split('=');
        argObj[key] = val;
    };
    return argObj;
};
let result = fx(argLoader() as any);
console.log(result);