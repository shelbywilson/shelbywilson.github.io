const SPACE_BAR = 13;
const ENTER = 32;

export const handleKeyPress = (e: KeyboardEvent, cb: () => void) => {
    switch(e.keyCode) {
        case SPACE_BAR:
        case ENTER:
            e.preventDefault();
            cb();
            break;
        default:
            break;
    }
}

export default {
    handleKeyPress,
}