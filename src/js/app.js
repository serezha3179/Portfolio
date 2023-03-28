import * as flsFunctions from './modules/functions.js';

import './jquery-3.6.1.min.js';
import './slick.min.js';
// import './slider.js';
import './burger.js';
import './header-nav.js';

flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 
