/**
 * 1. Render songs --> done
 * 2. Scroll top --> done
 * 3. Play / pause / seek --> done
 * 4. CD rotate --> done
 * 5. Next / prev --> done
 * 6. Random --> done
 * 7. Next / Repeat when ended --> done
 * 8. Active song --> done
 * 9. Scroll active song into view
 * 10. Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'DucAnh_Player';
const playList = $('.playlist');
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const player = $('.player');
const playBtn = $('.btn-toggle-play');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const progress = $('#progress');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const durationTime = $('.timer .duration');
const remainingTime = $('.remaining');
const volume = $('.volume');
const volumeIcon = $('.icon-volume');
const muteIcon = $('.icon-mute');
const app = {
    currentIndex : 0,
    isPLaying: false,
    isRandom: false,
    isRepeat: false,
    isMute: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    songs: [
        {
            name: 'Em bé',
            singer: 'Amee - Karik',
            path: './assets/music/music1.mp3',
            image: './assets/image/amee.jpg'
        },
        {
            name: 'Bánh mì không',
            singer: 'Đạt G - Du Uyên',
            path: './assets/music/music2.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bad guy',
            singer: 'Billie Eilish',
            path: './assets/music/music3.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'COPYCAT',
            singer: 'Billie Eilish',
            path: './assets/music/music4.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'WAP',
            singer: 'Cardi B - Mega Thee',
            path: './assets/music/music5.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bodak Yellow',
            singer: 'Cardi B',
            path: './assets/music/music6.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Em bé',
            singer: 'Amee - Karik',
            path: './assets/music/music1.mp3',
            image: './assets/image/amee.jpg'
        },
        {
            name: 'Bánh mì không',
            singer: 'Đạt G - Du Uyên',
            path: './assets/music/music2.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bad guy',
            singer: 'Billie Eilish',
            path: './assets/music/music3.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'COPYCAT',
            singer: 'Billie Eilish',
            path: './assets/music/music4.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'WAP',
            singer: 'Cardi B - Mega Thee',
            path: './assets/music/music5.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bodak Yellow',
            singer: 'Cardi B',
            path: './assets/music/music6.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Em bé',
            singer: 'Amee - Karik',
            path: './assets/music/music1.mp3',
            image: './assets/image/amee.jpg'
        },
        {
            name: 'Bánh mì không',
            singer: 'Đạt G - Du Uyên',
            path: './assets/music/music2.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bad guy',
            singer: 'Billie Eilish',
            path: './assets/music/music3.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'COPYCAT',
            singer: 'Billie Eilish',
            path: './assets/music/music4.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'WAP',
            singer: 'Cardi B - Mega Thee',
            path: './assets/music/music5.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bodak Yellow',
            singer: 'Cardi B',
            path: './assets/music/music6.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Em bé',
            singer: 'Amee - Karik',
            path: './assets/music/music1.mp3',
            image: './assets/image/amee.jpg'
        },
        {
            name: 'Bánh mì không',
            singer: 'Đạt G - Du Uyên',
            path: './assets/music/music2.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bad guy',
            singer: 'Billie Eilish',
            path: './assets/music/music3.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'COPYCAT',
            singer: 'Billie Eilish',
            path: './assets/music/music4.mp3',
            image: './assets/image/billieeilish.jpg'
        },
        {
            name: 'WAP',
            singer: 'Cardi B - Mega Thee',
            path: './assets/music/music5.mp3',
            image: './assets/image/cardiB.jpg'
        },
        {
            name: 'Bodak Yellow',
            singer: 'Cardi B',
            path: './assets/music/music6.mp3',
            image: './assets/image/cardiB.jpg'
        },
    ],
    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active': ''}" data-index="${index}">
                    <div class='index-song'>${index + 1}</div>
                    <div class="thumb" style="background-image: url('${song.image}')"></div>
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
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    handleEvents: function() {
        const cdWidth = cd.offsetWidth;
        // const _this = this; 

        // Xử lý CD quay
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();

        // Xử lý phóng to / thu nhỏ cd
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0 + 'px';
            cd.style.opacity = newCdWidth / cdWidth;  
        }

        // Xử lý khi click play
        playBtn.onclick = function () {
            if(app.isPLaying === true) {
            // if(_this.isPLaying === true) {
                audio.pause();
            } else {
                audio.play();
            }
        }
        // Khi song dc play
        audio.onplay = function () {
            player.classList.add('playing');
            app.isPLaying = true;
            cdThumbAnimate.play();
        }
        // Khi audio bị pause 
        audio.onpause = function () {
            player.classList.remove('playing');
            app.isPLaying = false;
            cdThumbAnimate.pause();
        }

        // Update thanh chạy song
        audio.ontimeupdate = function () {
            // audio.duration : thời gian tối đa của bài hát
            // audio.currentTime: thời gian hiện tại của bài hát
            if (audio.duration) {
                // Quy đổi thời gian chênh lệch ra %
                // Vì input[progress] có giá trị min = 0 -> max = 100;
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
                
                const progressDanger = $('.progress-danger');
                progressDanger.style.width = progressPercent + "%";
            }
        }
        // Xử lý khi tăng/giảm/muted volume
        volume.onchange = function () {
            audio.volume = volume.value/100;
            volume.style = app.changeVolume(audio.volume);
        }
        volume.onmousemove = function () {
            audio.volume = volume.value/100;
            volume.style = app.changeVolume(audio.volume);
        }
        volumeIcon.onclick = function () {
            audio.muted = true
            muteIcon.style.display = 'block';
            volumeIcon.style.display = 'none';
        }
        muteIcon.onclick = function () {
            audio.muted = false
            muteIcon.style.display = 'none';
            volumeIcon.style.display = 'block';
        }

        // Xử lý khi tua song
        progress.onchange = function (e) {
            // Công thức tính thời gian tại vị trí bất kỳ của bài hát
            //  = Tổng thời gian * giá trị % tại vị trí đó : 100
            const seekTime = audio.duration * (e.target.value / 100);
            audio.currentTime = seekTime;
            console.log(seekTime);
        }

        // Xử lý khi next song
        nextBtn.onclick = function () {
            if(app.isRandom) {
                do {
                    newIndex = Math.floor(Math.random() * app.songs.length);
                } while (newIndex == app.currentIndex);
                app.currentIndex = newIndex;
            } else {
                app.currentIndex++;
                if(app.currentIndex >= app.songs.length) {
                    app.currentIndex = 0
                }
            }
            app.loadCurrentSong();
            if (app.isPLaying === true) {
                audio.play();
            } else {
                audio.pause();
            }
            app.render();
          
            app.scrollToActiveSong();
        }

        // Xử lý khi prev song
        prevBtn.onclick = function () {
            if(app.isRandom) {
                do {
                    newIndex = Math.floor(Math.random() * app.songs.length);
                } while (newIndex == app.currentIndex);
                app.currentIndex = newIndex;
            } else {
                app.currentIndex--;
                if(app.currentIndex < 0) {
                    app.currentIndex = app.songs.length - 1
                }
            }
            app.loadCurrentSong();
            if (app.isPLaying === true) {
                audio.play();
            } else {
                audio.pause();
            }
            app.render();
            app.scrollToActiveSong();
        }

        // Highlight random btn
        randomBtn.onclick = function () {
            app.isRandom = !app.isRandom;
            app.setConfig('isRandom', app.isRandom);
            randomBtn.classList.toggle('active', app.isRandom);
        }

        // Xừ lý song khi kết thúc
        audio.onended = function () {
            if(app.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }

        // Highlight repeat btn
        repeatBtn.onclick = function () {
            app.isRepeat = !app.isRepeat;
            app.setConfig('isRepeat', app.isRepeat)
            repeatBtn.classList.toggle('active', app.isRepeat);
        }       

        // Lắng nghe hành vì click vào playlist
        playList.onclick = function (e) {
            const songNode = e.target.closest('.song:not(.active)');
            if(songNode || e.target.closest('.option')) {
                // Xử lý khi click vào song
                if(songNode) {
                    // dataset.index = data-index
                    app.currentIndex = Number(songNode.dataset.index) //convert sang number vì lấy giá trị trong data-index là string
                    console.log(songNode.dataset.index);
                    app.loadCurrentSong();
                    if (app.isPLaying === true) {
                        audio.play();
                    } else {
                        audio.pause();
                    }
                    app.render();
                }
                // Xử lý khi click vào option
                if(e.target.closest('.option')) {

                }
            }
        }
    },
    loadCurrentSong: function () {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
        randomBtn.classList.toggle('active', this.isRandom);
        repeatBtn.classList.toggle('active', this.isRepeat);
    },
    displayTimer: function () {
        const {duration, currentTime} = audio;
        remainingTime.textContent = this.formatTimer(currentTime);
        if(!duration) {
            durationTime.textContent = "00:00";
        } else {
            durationTime.textContent = this.formatTimer(duration);
        }
    },
    formatTimer: function (number) {
        const minutes = Math.floor(number/ 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 200)
    },
    changeVolume: function() {
        const percentage = (volume.value - volume.min)/(volume.max - volume.min) * 100;
        return 'background: linear-gradient(to right, #ec1f55, #ec1f55 ' + percentage + '%, #d3edff ' + percentage + '%, #dee1e2 100%)'
    },
    start: function() {
        // Gán cấu hình từ config vào app music(đọc từ local storage rồi gán vào ứng dụng)
        this.loadConfig();

        // Định nghĩa các thuộc tính cho object
        this.defineProperties();
        
        // Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents();
        
        // Tải thông tin bài hát đầu tiền vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        
        // Chạy timer
        this.displayTimer();
        setInterval(() => {
            this.displayTimer();
        }, 500);
        
        // Mặc định volume 
        audio.volume = volume.value/100;
        volume.style = this.changeVolume(volume.value)

        // Render playlist
        this.render();
    }
}
app.start();