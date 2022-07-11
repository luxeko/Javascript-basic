const api = "https://jsonplaceholder.typicode.com/photos";
let perPage = 6;
let currentPage = 1;
let start = 0;
let end = perPage;
const btn_next = document.querySelector(".next_btn");
const btn_previous = document.querySelector(".previous_btn");

function run() {
    getProducts(renderProducts);
}
run();
function getProducts(callback) {
    fetch(api)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}
function renderProducts(products) {
    // const total = Math.ceil(products.length / perPage);
    const htmls = products.map((product, index) => {
        if(index >= start && index < end) {
            return ` <div class="box">
                        <a href="">
                            <div>
                                <img src="${product.url}">
                            </div>
                            <div class="title">
                                <h3>${product.id}. ${product.title}</h3>
                            </div>
                        </a>
                    </div>`;
        }
    })
    document.getElementById("products").innerHTML = htmls.join("");
}

function renderListPages(products) {
    const totalPages = Math.ceil(100 / perPage);
    let htmls = `<li id="page_1" class="active"><a>${1}</a></li>`;
    for (let index = 2; index <= totalPages; index++) {
        htmls += `<li id="page_${index}"><a>${index}</a></li>`;
    }
    document.querySelector(".pagination ul .number_pages").innerHTML = htmls;
    changePage();
    run();
}
getProducts(renderListPages);

function getCurrentPage(currentPage) {
    start = (currentPage - 1)*perPage;
    end = currentPage * perPage;
}
function changePage() {
    const allPages = document.querySelectorAll(".pagination ul .number_pages li");
    for (let index = 0; index < allPages.length; index++) {
        allPages[index].addEventListener('click', () => {
            const value = index + 1;
            currentPage = value;
            if(currentPage === 1) {
                btn_previous.style.color = "#f9f9f9";
                btn_previous.style.cursor = "unset";  
            } else {
                btn_previous.style.color = "black";
                btn_previous.style.cursor = "pointer";

            }
            if(currentPage === allPages.length) {
                btn_next.style.color = "#f9f9f9";
                btn_next.style.cursor = "unset";

            } else {
                btn_next.style.color = "black";
                btn_next.style.cursor = "pointer";
            }
            for (let i = 0; i < allPages.length; i++) {
                allPages[i].classList.remove("active");
            }
            allPages[index].classList.add("active")
            if(currentPage === 1) {}
            getCurrentPage(currentPage);
            getProducts(renderProducts);
        })        
    }
}

function clickEvent(products) {
    const totalPages = Math.ceil(100 / perPage);
    const allPages = document.querySelectorAll(".pagination ul .number_pages li");
    btn_next.addEventListener('click', () => {
        for (let i = 0; i < allPages.length; i++) {
            allPages[i].classList.remove("active");
        }
        currentPage++;
        if(currentPage > totalPages) {
            currentPage = totalPages;
        }
        if(currentPage === totalPages) {
            btn_next.style.color = "#f9f9f9";
            btn_next.style.cursor = "unset";
        }
        document.querySelector("#page_" + currentPage).classList.add('active');
        btn_previous.style.color = "black";
        getCurrentPage(currentPage);
        run();
    })
    btn_previous.addEventListener('click', () => {
        for (let i = 0; i < allPages.length; i++) {
            allPages[i].classList.remove("active");
        }
        currentPage--;
        if(currentPage <= 1) {
            currentPage = 1;
        }
        if(currentPage === 1) {
            btn_previous.style.cursor = "unset";
            btn_previous.style.color = "#f9f9f9";
        }
        document.querySelector("#page_" + currentPage).classList.add('active');
        btn_next.style.color = "black";
        getCurrentPage(currentPage);
        run();
    })
}
getProducts(clickEvent);

