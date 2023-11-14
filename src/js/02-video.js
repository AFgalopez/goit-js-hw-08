import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new Vimeo(iframe);

const savePlaybackTime = throttle(function () {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000);

player.on('timeupdate', savePlaybackTime);

const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}
