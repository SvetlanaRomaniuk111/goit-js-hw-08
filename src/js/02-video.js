import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    console.log('--->>> here <<<---');
    localStorage.setItem('videoplayer-current-time', seconds);
  }, 1000)
);
player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
