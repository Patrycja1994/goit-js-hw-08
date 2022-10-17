
     import Player from '@vimeo/player';
     import { throttle } from 'lodash.throttle';

     const iframe = document.querySelector('iframe');
     const player = new Player(iframe);
    
     const onPlay = function(data) {
        localStorage.setItem('videoplayer-current-time', data.seconds);
        console.log('Saved time:', localStorage.getItem("videoplayer-current-time")) 
     };
     
    const startTime = localStorage.getItem('videoplayer-current-time');
    const saveTime = JSON.parse(startTime);

    player.setCurrentTime(saveTime).then(function(seconds) {
        // seconds = the actual time that the player seeked to
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });

    const playThrottle = throttle(onPlay, 1000);

    player.on('timeupdate', playThrottle);