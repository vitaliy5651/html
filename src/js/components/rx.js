import {fromEvent} from 'rxjs';
import {tap, map, scan} from 'rxjs'

document.addEventListener('DOMContentLoaded', () => {

fromEvent(document, 'click').pipe(
    map(e => {
        return {x: e.clientX, y: e.clientY}
    }),
)
.subscribe((data) => console.log('From subscribe: ', data));

});

