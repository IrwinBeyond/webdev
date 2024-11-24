//ambil element ID
const pro_items = document.getElementById('pro');

//ES6
const your_pro = ['Graphic Editor', 'Frontend Developer', 'UI Design'];

let parent = '<ol>';
your_pro.forEach((pro) => {
    parent += '<li>' + pro + '</li>';
    console.log(`${pro}`);
});

parent += '</ol>';
pro_items.innerHTML = parent;
