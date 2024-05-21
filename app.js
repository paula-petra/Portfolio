const menuBtn = document.querySelector('.open-menu');
const menu = document.querySelector('.menu');
const aboutBtn = document.querySelector('#about-btn').firstChild;
const projBtn = document.querySelector('#proj-btn').firstChild;
const servicesBtn = document.querySelector('#services-btn').firstChild;

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('open');
    changeBtn();
    changeRef();
})

function changeBtn(){
    if (menuBtn.src == "https://img.icons8.com/ios-glyphs/30/menu--v1.png"){
        menuBtn.src = "https://img.icons8.com/ios/30/delete-sign--v1.png"
    } else {
        menuBtn.src = "https://img.icons8.com/ios-glyphs/30/menu--v1.png"
    }
}

function changeRef(){
    aboutBtn.href = "about.html"
    projBtn.href = "projects.html"
    servicesBtn.href = "services.html"
}

var path = window.location.pathname;
var page = path.split("/").pop();
const mobileHome = document.querySelector('#section1')
const mobileAbout = document.querySelector('#about')
const mobileProj = document.querySelector('#projects')
const mobileServices = document.querySelector('#services')

function displaySection(x){
    if(x.matches){
        if(page == 'index.html'){
            if(mobileAbout.style.display == ''){
                mobileAbout.style.display = 'none';
            }
            if(mobileProj.style.display == ''){
                mobileProj.style.display = 'none';
            }
            if(mobileServices.style.display == ''){
                mobileServices.style.display = 'none';
            }
        }

        if(page == 'about.html'){
            if(mobileHome.style.display == ''){
                mobileHome.style.display = 'none';
            }
            if(mobileProj.style.display == ''){
                mobileProj.style.display = 'none';
            }
            if(mobileServices.style.display == ''){
                mobileServices.style.display = 'none';
            }
        }

        if(page == 'projects.html'){
            if(mobileHome.style.display == ''){
                mobileHome.style.display = 'none';
            }
            if(mobileAbout.style.display == ''){
                mobileAbout.style.display = 'none';
            }
            if(mobileServices.style.display == ''){
                mobileServices.style.display = 'none';
            }
        }

        if(page == 'services.html'){
            if(mobileHome.style.display == ''){
                mobileHome.style.display = 'none';
            }
            if(mobileAbout.style.display == ''){
                mobileAbout.style.display = 'none';
            }
            if(mobileProj.style.display == ''){
                mobileProj.style.display = 'none';
            }
        }
    }
}

var x = window.matchMedia("(max-width: 425px)");
displaySection(x);