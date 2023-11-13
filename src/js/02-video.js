// Importar la biblioteca Vimeo Player API y lodash.throttle
import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Obtener el elemento del iframe
const iframe = document.getElementById('vimeo-player');

// Configurar el reproductor de Vimeo
const player = new Vimeo(iframe);

// Inicializar la función de guardado del tiempo de reproducción
const savePlaybackTime = throttle(function () {
  player.getCurrentTime().then(function (time) {
    localStorage.setItem('videoplayer-current-time', time);
  });
}, 1000); // Actualizar como máximo una vez por segundo

// Escuchar el evento 'timeupdate' del reproductor y guardar el tiempo
player.on('timeupdate', savePlaybackTime);

// Recuperar el tiempo de reproducción guardado al cargar la página y establecerlo
const currentTime = localStorage.getItem('videoplayer-current-time');

if (currentTime) {
  player.setCurrentTime(parseFloat(currentTime));
}
