import { MENU_TOGGLE} from '../actions/types';

const initialState ={
    menuicon :'menuicon icon-down',
    menucloseoropen:'menu-close menu-open',
    nslwindow:'nsl-content contpadd active-sidebar'
};

export default function(state = initialState, action){
    switch(action.type){
        case MENU_TOGGLE:
            return{
                ...state,
                menuicon : action.menuicon,
                menucloseoropen : action.menucloseoropen,
                nslwindow : action.nslwindow
            }
        default:
            return state;
    }
}