let sideBar = document.getElementById('sideBarBox');
let burgerBtn = document.getElementById('navBox--burger');
let closeSideBarBtn = document.getElementById('sideBarBox--close');

burgerBtn.addEventListener('click', () =>{
    document.querySelector('.sideBar').classList.add('show');
});

closeSideBarBtn.addEventListener('click', () =>{
        document.querySelector('.sideBar').classList.remove('show');

});