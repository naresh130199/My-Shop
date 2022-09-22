    //Items for our Gajak Shop
const menu = [
    {
        id: 1,
        title: "Biscuits",
        category: "Till-Gajak",
        price : 200,
        img : "images/1-Biscuits.jpg",
        desc : "Our-Speciality, its made with the goodness of washed sesame seeds and jaggery",
    },
    {
        id: 2,
        title: "Chikki",
        category: "peanut",
        price : 160,
        img: "images/1-chikki.jpg",
        desc: "THE BEST gajak there will ever be!! Made with peanuts, jaggery and LOVE",
    },
    {
        id: 3,
        title: "Mawa baati",
        category: "mawa/Khoya",
        price : 250,
        img: "images/1-mawa-bati.jpg",
        desc: "Made with a fine mixture of washed sesame seeds, jaggery, filled with mawa on the outside",
    },
    {
        id: 4,
        title: "Till-Patti",
        category: "Till-Gajak",
        price : 160,
        img : "images/1-patti.jpg",
        desc : "made with farm fresh sesame seeds and jaggery resulting in a thinner mouth watering piece of gajak ",
    },
    {
        id: 5,
        title: "Jalebi",
        category: "peanut",
        price : 200,
        img: "images/1-jalebi.jpg",
        desc: "Deep roasted peanuts and jaggery mixed with the goodness of desi ghee",
    },
    {
        id: 6,
        title: "Laddu",
        category: "Till-Gajak",
        price : 160,
        img: "images/1-laddu.jpg",
        desc: "Most beautiful mixture of sesame seeds, jaggery",
    },
    {
        id: 7,
        title: "Mawa-Rolls",
        category: "mawa/Khoya",
        price : 240,
        img : "images/1-mawa-roll.jpg",
        desc : "Rolls made with Jaggery, mawa and sesame seeds ",
    },
    {
        id: 8,
        title: "Revdi",
        category: "Till-Gajak",
        price : 160,
        img: "images/1-revdi.jpg",
        desc: "Small, sweet(jaggery+suger) candies with the wrapping of sesme seeds",
    },
    {
        id: 9,
        title: "mawa-barfi",
        category: "mawa/Khoya",
        price : 350,
        img: "images/1-mawa-barfi.jpg",
        desc: "Made with a sweet mixture of Mawa with sugar without any sesame seeds",
    }    
];

const sectionCenter = document.querySelector('.section-center');
const filterBtns = document.querySelectorAll('.filter-btn');
const buttonContainer = document.querySelector('.button-container');

//on the loading of our page
window.addEventListener("DOMContentLoaded", function () {    
    displayMenuItems(menu);
    displayMenuBtns();  
});

//Display our menu items 
function displayMenuItems(menuItems){
     let displayMenu = menuItems.map(function(item){  //function(item)
        return (
        `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>         
            <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">${item.desc}</p>              
            </div>
        </article> `);  
    });
    displayMenu = displayMenu.join('');    
    sectionCenter.innerHTML = displayMenu;
}



 /*   ----Category buttons----- */ 
function displayMenuBtns(){
    const categories = menu.reduce(function(values, item){        
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },['all']);     

    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
      }).join('');

      buttonContainer.innerHTML = categoryBtns;
      
      const filterBtns = document.querySelectorAll('.filter-btn');

        filterBtns.forEach(function (btn) {
            btn.addEventListener("click", function(e) {
                const category =  e.currentTarget.dataset.id;

                const menuCategory = menu.filter(function (menuItem){
                    //    return menuItem;

                if(menuItem.category === category){
                    return menuItem;
                }
                });

                if(category === 'all'){
                        displayMenuItems(menu);
                }
                else{
                        displayMenuItems(menuCategory);
                }
             
                });
    });
}
