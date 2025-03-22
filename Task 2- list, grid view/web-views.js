

function smoothTransition(url) {
    document.body.classList.add('fade-out'); 
    setTimeout(() => {
        window.location.href = url; 
    }, 500); 
}


const btn_list = document.getElementById('list-view');
btn_list.addEventListener('click', () => smoothTransition('web-listview.html'));

const btn_grid = document.getElementById('grid-view');
btn_grid.addEventListener('click', () => smoothTransition('web-gridview.html'));



function switchTab(index) {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    tabs.forEach((tab, i) => {
        tab.classList.toggle("active", i === index);
        contents[i].classList.toggle("active", i === index);
    });
}


const backToshop = document.getElementById('#back');
backToshop.addEventListener('click', () =>{

    console.log("button clicked");

    window.location.href = 'index.html';

});


function toggleDropdown(element) {
    element.classList.toggle('active');
  }
  