
Array.filter = function(callback) 
{
    let result = [];
    for (let i=0, len = this.length; i < len; i++)
    {
        if (callback(this[i]))
        {
            result.push(this[i]);
        }
    }
    return result;
}
let x = [1,2,3,7,8,9];
let y = x.filter(t => t%2 === 0);
console.log(y);