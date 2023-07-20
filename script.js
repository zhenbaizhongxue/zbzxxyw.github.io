// 获取音乐播放器元素
const bgMusic = document.getElementById('bg-music');

// 获取音乐播放/暂停按钮元素
const playPauseBtn = document.getElementById('play-pause-btn');

// 控制音乐播放/暂停
playPauseBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        playPauseBtn.textContent = '暂停';
    } else {
        bgMusic.pause();
        playPauseBtn.textContent = '播放';
    }
});
