const users = [
    {
        id: 1,
        name: 'Duc Anh'
    },
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Minh Hong'
    }
]
const comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra them video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vừa post lên e ơi :v'
    },
    {
        id: 3,
        user_id: 3,
        content: '@DucAnh Bae chăm thế :3'
    }
]

// 1. Lấy commnets
// 2. Từ comments lấy ra user_id,
// 3. Từ user_id lấy ra user
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
};
function getUsersByIds(users_id) {
    return new Promise(function(resolve) {
        let result = users.filter(function(user) {
            return users_id.includes(user.id);
        })
        setTimeout(function() {
            resolve(result);
        }, 1000)
    })
}
getComments()
    .then(function(comments) {
        console.log(comments);
        let users_id = comments.map(function(comment) {
            return comment.user_id;
        });
        return getUsersByIds(users_id)
            .then(function(users) {
                console.log(users);
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(datas) {
        let commentBlock = document.getElementById('comment_block');
        let html = '';
        datas.comments.forEach(function(comment) {
            console.log(comment);
            let user = datas.users.find(function(user) {
                return user.id === comment.user_id;
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html;
    })
    .catch(function() {

    })