let data;
let i=0;   
async function getProduct()
{
    try{
        let res = await fetch('https://dummyjson.com/products?limit=10');
        data = await res.json();
        console.log(data);
        load();
    }

    catch(error)
    {
    console.log("Error is",error);
    }
}
//save product data globally
function load()
{   
    //loads everytime / scope
    let obj = data.products[i];
    // console.log("inside load function", obj);
    // console.log("index is", i);
    display(obj);
}
function display(obj)
{
    //console.log("Inside display", obj.title);
    let divq = document.getElementById('title');
    divq.innerHTML = `${obj.title} <br>`;
    let divs = document.getElementById('desc');
    divs.innerHTML = ` ${obj.description} <br>`;
    let divp = document.getElementById('product');
    divp.innerHTML = ` <br><img src ="${obj.images[0]}" height="200" width="300"  /> `;
    let divt = document.getElementById('price');
    divt.innerHTML = `$${obj.price} <br>`;
    let divu = document.getElementById('rating');
    divu.innerHTML = `<svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M923.2 429.6H608l-97.6-304-97.6 304H97.6l256 185.6L256 917.6l256-187.2 256 187.2-100.8-302.4z" fill="#FAD97F" /><path d="M1024 396H633.6L512 21.6 390.4 396H0l315.2 230.4-121.6 374.4L512 770.4l316.8 232L707.2 628 1024 396zM512 730.4l-256 187.2 97.6-302.4-256-185.6h315.2l97.6-304 97.6 304h315.2l-256 185.6L768 917.6l-256-187.2z" fill="" /></svg>`
    divu.innerHTML += `${obj.rating}`;
    //width="400" 
}
function next()
{
    console.log("i inside next func",i);
    i = i + 1;
    console.log("i after increment",i);
    if(i<10)
{
load();
}
else
{
window.alert('No more next items');
}
}
//global or block scope

function prev()
{
i = i-1;
//  if logic
if(i>=0)
{
load();
}
else
{
window.alert('No more previous items');
}
}
getProduct();