/**
 * 1. Render songs
 * 2. Scroll top
 * 3. Play / pause / seek
 * 4. CD rotate
 * 5. Next / prev
 * 6. Random
 * 7. Next / Rêpat when ended
 * 8. Active song
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const playList = $('.playlist');
const app = {
    songs: [
        {
            name: 'Em bé',
            singer: 'Amee - Karik',
            path: '../assets/music/music1.mp3',
            image: './assets/image/amee.jpg'
        },
        {
            name: 'Bánh mì không',
            singer: 'Đạt G - Du Uyên',
            path: '../assets/music/music2.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bad guy',
            singer: 'Billie Eilish',
            path: '../assets/music/music3.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'COPYCAT',
            singer: 'Billie Eilish',
            path: '../assets/music/music4.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'WAP',
            singer: 'Cardi B - Mega Thee',
            path: '../assets/music/music5.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bodak Yellow',
            singer: 'Cardi B',
            path: '../assets/music/music6.mp3',
            image: './assets/image/cardiB.jpg'
        },
    ],
    render: function () {
        const htmls = this.songs.map(song => {
            return `
                <div class="song">
                <div class="thumb" style="background-image: url('${song.image}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
            </div>
            `
        })
        playList.innerHTML = htmls.join('\n')
    },
    handleEvents: function() {

    },
    start: function() {
        this.handleEvents();
        this.render();
    }
}
app.start();