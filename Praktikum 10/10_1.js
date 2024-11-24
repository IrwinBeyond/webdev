//ambil element ID
const name_place = document.getElementById('name');
const pro_items = document.getElementById('pro');

//Nama
const name_logged = "Irwin";
name_place.innerHTML = `Nama : ${name_logged}`;
console.log(name_logged);

//Hobi
const your_pro = ['Bermain Game', 'Menyanyi', 'Kuliner'];

let parent = '<ol>';
your_pro.forEach((pro) => {
    parent += '<li>' + pro + '</li>';
    console.log(`${pro}`);
});

parent += '</ol>';
pro_items.innerHTML = parent;
