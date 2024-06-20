document.addEventListener("DOMContentLoaded", function() {
    let menuItems = document.querySelectorAll("#menuList li");

    // 페이지 식별자에 따라 활성화된 메뉴 항목에 active 클래스를 추가합니다.
    let currentPage = document.documentElement.getAttribute('data-page');
    
    // 현재 페이지에 해당하는 메뉴 항목에 active 클래스 추가
    menuItems.forEach(function(item) {
        if (currentPage === 'page' + item.getAttribute('clickNum')) {
            item.classList.add('active');
        }

        // 클릭 이벤트 추가
        item.addEventListener('click', function() {
            // 클릭된 메뉴 항목에 따라 다른 페이지로 이동합니다.
            switch (item.getAttribute('clickNum')) {
                case '0':
                    window.location.href = 'page1.html';
                    break;
                case '1':
                    window.location.href = 'page2.html';
                    break;
                case '2':
                    window.location.href = 'page3.html';
                    break;
                case '3':
                    window.location.href = 'page4.html';
                    break;
                default:
                    break;
            }

            // 클릭한 메뉴 항목에 대한 활성 클래스 추가 및 다른 항목의 활성 클래스 제거
            menuItems.forEach(function(menuItem) {
                menuItem.classList.remove('active');
            });
            item.classList.add('active');
        });
    });
});

// 해외 사례 및 해결 방안
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.height = 'auto';
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.style.marginTop = '20px';
            }
        });
    });

    box.addEventListener('mouseleave', () => {
        box.style.height = '';
        document.querySelectorAll('.box').forEach(otherBox => {
            if (otherBox !== box) {
                otherBox.style.marginTop = '';
            }
        });
    });
});

// 끝

document.addEventListener("DOMContentLoaded", startFn); //모든 컨텐츠 로드되면 실행

document.addEventListener("DOMContentLoaded", function() {
    let menuItems = document.querySelectorAll("#menuList li");

    // 메뉴 1 항목에 대한 활성 클래스 추가
    menuItems[0].classList.add("active");

    menuItems.forEach(function(item) {
        item.addEventListener("click", function() {
            // 클릭한 메뉴 항목에 대한 활성 클래스 추가 및 다른 항목의 활성 클래스 제거
            menuItems.forEach(function(item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        });
    });
});

let imgData = [
    "eclipse.jpg", "eclipse2.jpg", "eclipse3.jpg"
];

let imgName = [
    "이클립스 페퍼민트향 ",
    "이클립스 복숭아향",
    "이클립스 스트로베리향"
];

let thumbnailBox = document.querySelectorAll(".thumbnail");
let imgTags = document.querySelectorAll(".imageTag");

let thembText =document.querySelectorAll(".textField");


for(let i=0; i<thumbnailBox.length; i++)
    {
        imgTags[i].src = "img/" + imgData[i];
        thembText[i].textContent = imgName[i];
    
        thumbnailBox[i].addEventListener("mouseover", overFn);
        thumbnailBox[i].addEventListener("mouseout", outFn);
    }
    
    function overFn(e)
    {
        //console.log(e.composedPath()[1].querySelector(".imageTag"));
        e.composedPath()[1].querySelector(".imageTag").classList.add("on");
        e.composedPath()[0].classList.add("on");
    
    }
    
    function outFn(e)
    {
        e.composedPath()[1].querySelector(".imageTag").classList.remove("on");
        e.composedPath()[0].classList.remove("on");
        
    }

function startFn()
{
    let menu = document.querySelectorAll("#menuList li");

    let contents = document.querySelectorAll("#container section");

    let scrollPos = 0;
    let targetScrollPos;
    let nowScrollPos = scrollY

    let scrollAni;

    window.addEventListener("scroll", scrollFn);

    function scrollFn()
    {
        nowScrollPos = scrollY;
        scrollPos = nowScrollPos;
        
    }


    for(let i = 0; i < menu.length; i++)
    {
        menu[i].addEventListener("click", 
        
        function(){
            let index = this.getAttribute("clickNum");
            //console.log(index);

            targetScrollPos = contents[index].offsetTop;

            scrollAni = requestAnimationFrame(moveTo);
        }

        );
    }

    function moveTo()
    {
        scrollPos += (targetScrollPos - nowScrollPos) *0.2;
        window.scroll(0, scrollPos);

        if(Math.abs(targetScrollPos - nowScrollPos) <=1)
        {
            window.scroll(0, targetScrollPos);
            cancelAnimationFrame(scrollAni);
        }

        scrollAni = requestAnimationFrame(moveTo);
    }

}



let nowIndex = 1;



const imageSlider = document.querySelector('#imageSlider');

const leftArrow = document.querySelector('#leftArrow');
const rightArrow = document.querySelector('#rightArrow');

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

// 첫번째 이미지로 이동
function moveA()
{
    imageSlider.style.transform ='translate(0px)';
    nowIndex=1;
    
}
// 두번째 이미지로 이동
function moveB()
{
    imageSlider.style.transform ='translate(-330px)';
    nowIndex=2;
}