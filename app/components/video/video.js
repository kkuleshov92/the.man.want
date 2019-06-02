let video = document.getElementById('video'),
    progress = document.querySelector('.progress'),
    progressValue = document.querySelector('.progress-value');
    document.getElementById('play').onclick = play;
    document.getElementById('stop').onclick = stop;

//play and pause video functions
function play() {
    video.play();
}
function stop() {
    video.pause();
}
//get time function
function getTime (duration, currTime) {
    let minutes = Math.floor(duration / 60);
    let seconds = duration - minutes * 60;
    seconds = String(seconds).slice(0, String(seconds).indexOf(('.')));
    let fullTime = {
        minutes: minutes,
        seconds: seconds
    };
    return fullTime;
}

//set video duration to span
video.addEventListener('canplaythrough', function () {
    let videoTime = getTime(video.duration, video.currentTime);
    document.querySelector('.video-duration').innerHTML = videoTime.minutes + ':' + videoTime.seconds;
});

video.addEventListener('timeupdate', function () {
    progressValue.style.width = String((100 * video.currentTime) / video.duration) + '%';
    //тут изменение времени in span
    let c = video.currentTime;
    let minutes = Math.floor(c / 60);
    let seconds = c - minutes * 60;
    seconds = String(seconds).slice(0, String(seconds).indexOf(('.')));

    document.querySelector('.video-minutes').innerHTML = String(minutes); //set minutes to span
    seconds < 10 ? document.querySelector('.video-seconds').innerHTML = '0' + seconds : document.querySelector('.video-seconds').innerHTML = seconds; //set seconds to span

});

//change visibility of play/pause btns
document.getElementById('play').addEventListener('click', function () {
    this.classList.remove('active-control');
    document.getElementById('stop').classList.add('active-control');
});

document.getElementById('stop').addEventListener('click', function () {
    this.classList.remove('active-control');
    document.getElementById('play').classList.add('active-control');
});

//move video progress
progress.addEventListener('click', function (event) {
    let width = this.offsetWidth;
    let point = event.offsetX;
    this.style.width = String(point / width * 100);
    progressValue.style.width = String(point / width * 100) + '%';
    video.pause();
    video.currentTime = video.duration * (point / width);
    video.play();
});

//open-close video

let openVidBtn = document.querySelectorAll('.open-video'),
    closeVidBtn  = document.querySelector('.video-close');

openVidBtn.forEach(function (e) {
    e.addEventListener('click', function () {
        document.querySelector('.video-wrap').classList.add('opened');
    });
});

closeVidBtn.addEventListener('click', function () {
    document.querySelector('.video-wrap').classList.remove('opened');
});