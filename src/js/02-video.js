
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const _ = require('lodash');

var iframe = document.querySelector('iframe');
var player = new Vimeo.Player(iframe);

if (localStorage.getItem('videoplayer-current-time') > 0) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

var onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

var throttled = _.throttle(onPlay, 1000);

player.on('timeupdate', throttled);