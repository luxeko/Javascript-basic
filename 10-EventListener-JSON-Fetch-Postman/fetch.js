// const photoApi = 'https://jsonplaceholder.typicode.com/photos';

// fetch(photoApi)
//     .then(function(response) {
//         return response.json();
//         // trả về JSON.parse: JSON -> Javascript types
//     })
//     .then(function(photos) {
//         const htmls = photos.map(function(photo) {
//             if(photo.id <= 5) {
//                 return `<li>
//                     <h2>${photo.title}</h2>
//                     <img src=${photo.url}>
//                     <span>
//                         <img src=${photo.thumbnailUrl}>
//                         <img src=${photo.thumbnailUrl}>
//                         <img src=${photo.thumbnailUrl}>
//                         <img src=${photo.thumbnailUrl}>
//                     </span>
//                 </li>`;
//             }
//         });
//         let html = htmls.join('');
//         document.getElementById('photos_block').innerHTML = html;
//     })
//     .catch(function(err) {
//         console.log("Lỗi URL");
//     })

const courseApi = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses);
    handlerCreateCourse();
}
start();

// Functions
function getCourses(callback) {
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}
function renderCourses(courses) {
    const listCoursesBlock = document.querySelector("#list_courses");
    const htmls = courses.map(function (course) {
        return `
            <li class="course-item-${course.id}">
                <div>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p></div>
                <div>
                    <span>
                        <input type="submit" onclick="handleUpdateCourse(${course.id})" value="Sửa">
                        <input id="btn-delete" type="submit" onclick="handleDeleteCourse(${course.id})" value="Xoá">
                    </span>
                </div>
                
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join("");
}
function createCourse(data, callback) {
    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}
function updateCourse(data, id, callback) {
    const options = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(courseApi + '/' + id, options)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}
function handleUpdateCourse(id) {
    document.querySelector("#btn-submit").remove();
    const name = document.querySelector('input[name="name"]');
    const description = document.querySelector('textarea[name="description"]');
    const title = document.querySelector("legend");
            title.innerText = 'Sửa khoá học';
    const form_btn = document.querySelector(".form-btn");
    const btn_cancel = document.createElement("button");
            btn_cancel.id = 'btn-cancel';
            btn_cancel.innerText = 'Huỷ';
    const btn_update = document.createElement("button");
            btn_update.id = 'btn-update';
            btn_update.innerText = 'Update';
            btn_update.style.marginRight = '10px'
    fetch(courseApi)
        .then(function (response) {
            return response.json();
        })
        .then(function(datas) {
            getCourseById = datas.find(function(course) {
                return course.id === id;
            })
            name.value = getCourseById.name;
            description.value = getCourseById.description;
            if(form_btn.childElementCount < 2){
                form_btn.append(btn_update,btn_cancel);
            }
            btn_update.addEventListener('click', function(e) {
                // e.preventDefault();
                const newData = {
                    name: name.value,
                    description: description.value,
                };
                updateCourse(newData, getCourseById.id, function() {
                    getCourses(renderCourses);
                })
            })
        });
}
function handleDeleteCourse(id) {
    this.addEventListener('click',function(e) {
        e.preventDefault();
            if(confirm('Bạn có chắc muốn xoá?')) {
                const options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                fetch(courseApi + "/" + id, options)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function() {
                        const course = document.querySelector('.course-item-' + id)
                        if(course) {
                            course.remove();
                        }
                    });
            } else {
                getCourses(renderCourses);
            }
    })
}

function handlerCreateCourse() {
    let createBtn = document.querySelector("#btn-submit");
    createBtn.addEventListener("click", function (e) {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const description = document.querySelector('textarea[name="description"]').value;
        const data = {
            name: name,
            description: description,
        };
        createCourse(data, function () {
            getCourses(renderCourses);
        });
    });
}
