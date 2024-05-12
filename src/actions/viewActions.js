import {MENU_TOGGLE} from './types';

export const menuToggle = (menuAction) => dispatch => {
    if(menuAction==='on'){
        console.log("Menu Toggle On")
        dispatch({
            type:MENU_TOGGLE,
            menuicon :'menuicon icon-down',
            menucloseoropen:'menu-close menu-open',
            nslwindow:'nsl-content contpadd active-sidebar'
        })
    }
    else if(menuAction==='off'){
        console.log("Menu Toggle Off")
        dispatch({
            type:MENU_TOGGLE,
            menuicon :'menuicon',
            menucloseoropen:'menu-close',
            nslwindow:'nsl-content contpadd'
        })
    }
}