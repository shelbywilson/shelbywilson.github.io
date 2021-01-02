import moment from 'moment';

/*
    i = color
    j = shape
    k = texture
    m = number
*/
const attrs = ['i','j','k','m'];

export const localStorageName = 'SET_GAME_STATE';

export const getDefaultState = () => {
    try {
        const localStorageState = JSON.parse(localStorage.getItem(localStorageName));

        if (localStorageState) {
            let arrs = [localStorageState.remainingCards, localStorageState.cards.reverse()];
            localStorageState.remainingCards = [].concat(...arrs);
            localStorageState.cards = [];

            return localStorageState;
        }
    } catch (e) {
        console.log(e)
    }

    return {
        remainingCards: getCards(),
        cards: [],
        selected: [],
        found: [],
        wrong: 0,
        isInit: false,
        timer: 0,
    }
}

export const getCards = () => {
    return shuffle(initCards());
}

const initCards = () => {
    let cards = []; 
    for (let i = 0; i < 3; i += 1) {
        for (let j = 0; j < 3; j += 1) {
            for (let k = 0; k < 3; k += 1) {
                for (let m = 0; m < 3; m += 1) {
                    cards.push({
                        i,
                        j,
                        k,
                        m,
                        id: `${i}-${j}-${k}-${m}`,
                    })
                }
            }
        }
    }

    return cards;
}

const shuffle = (arr) => {
    let x;
    let y;
    let temp;
    
    for(x = arr.length - 1; x > 0; x -= 1) {
        y = Math.floor(Math.random() * x);
        temp = arr[x]
        arr[x] = arr[y]
        arr[y] = temp
    }

    return arr;
}

export const getSets = (cards) => {
    let sets = [];
    let check;
    let lookingFor;
    let set;
    let setIds = [];
    let setId;

    for (let i = 0; i < cards.length; i += 1) {
        check = cards[i];
        for (let j = 0; j < cards.length; j += 1) {
            if (cards[j].id !== cards[i].id && !cards[i].placeholder && !cards[j].placeholder) {
                lookingFor = getNeededCard(cards[i], cards[j]);

                // look for card
                for (let k = 0; k < cards.length; k += 1) {
                    if (cards[k].id !== cards[j].id && cards[k].id !== cards[i].id) {
                        if (cards[k].id === lookingFor.id) {
                            set = [cards[i], cards[j], cards[k]].sort((a,b) => a.id.localeCompare(b.id) );
                            
                            setId = '';
                            set.forEach(c => setId += c.id);

                            // prevent duplicates
                            if (setIds.indexOf(setId) === -1) {
                                sets.push(set);
                            }

                            setIds.push(setId)

                            break;
                        }
                    }
                }
            }
        }
    }

    return sets;
}

const getNeededCard = (a, b) => {
    const attrs =  ['i','j','k','m'];
    const lookingFor = {};

    attrs.forEach(attr => {
        if (a[attr] === b[attr]) {
            lookingFor[attr] = a[attr];
        } else {
            lookingFor[attr] = a[attr] !== 0 && b[attr] !== 0 ? 0
                : a[attr] !== 1 && b[attr] !== 1 ? 1
                : 2
        }
        lookingFor.id = getId(lookingFor);
    })

    return lookingFor;
}

const getId = (card) => {
    return `${card.i}-${card.j}-${card.k}-${card.m}`
}

export const isSet = ([a,b,c]) => {
    for (let i = 0; i < attrs.length; i += 1) {
        let attr = attrs[i];
        if (a[attr] === b[attr] && b[attr] === c[attr] && a[attr] === c[attr]) {
            // all same
        } else if (a[attr] !== b[attr] && a[attr] !== c[attr] && b[attr] !== c[attr]) {
            // all different
        } else {
            return false;
        }
    }

    return true;
}

export const getFormattedTime = (seconds) => {
    return moment().startOf('day')
        .seconds(seconds)
        .format('H:mm:ss')
}

export const getSetAnalysis = (sets) => {
    //const sets = [[{"i":2,"j":2,"k":2,"m":1,"id":"2-2-2-1"},{"i":2,"j":2,"k":0,"m":1,"id":"2-2-0-1"},{"i":2,"j":2,"k":1,"m":1,"id":"2-2-1-1"}],[{"i":1,"j":0,"k":1,"m":0,"id":"1-0-1-0"},{"i":0,"j":2,"k":1,"m":1,"id":"0-2-1-1"},{"i":2,"j":1,"k":1,"m":2,"id":"2-1-1-2"}],[{"i":1,"j":1,"k":2,"m":2,"id":"1-1-2-2"},{"i":1,"j":0,"k":0,"m":1,"id":"1-0-0-1"},{"i":1,"j":2,"k":1,"m":0,"id":"1-2-1-0"}],[{"i":1,"j":2,"k":2,"m":0,"id":"1-2-2-0"},{"i":2,"j":2,"k":2,"m":2,"id":"2-2-2-2"},{"i":0,"j":2,"k":2,"m":1,"id":"0-2-2-1"}],[{"i":1,"j":1,"k":0,"m":0,"id":"1-1-0-0"},{"i":1,"j":1,"k":0,"m":2,"id":"1-1-0-2"},{"i":1,"j":1,"k":0,"m":1,"id":"1-1-0-1"}],[{"i":2,"j":1,"k":2,"m":0,"id":"2-1-2-0"},{"i":1,"j":0,"k":1,"m":1,"id":"1-0-1-1"},{"i":0,"j":2,"k":0,"m":2,"id":"0-2-0-2"}],[{"i":2,"j":1,"k":0,"m":0,"id":"2-1-0-0"},{"i":1,"j":1,"k":1,"m":2,"id":"1-1-1-2"},{"i":0,"j":1,"k":2,"m":1,"id":"0-1-2-1"}],[{"i":1,"j":0,"k":0,"m":0,"id":"1-0-0-0"},{"i":2,"j":0,"k":0,"m":2,"id":"2-0-0-2"},{"i":0,"j":0,"k":0,"m":1,"id":"0-0-0-1"}],[{"i":0,"j":1,"k":1,"m":0,"id":"0-1-1-0"},{"i":0,"j":1,"k":1,"m":1,"id":"0-1-1-1"},{"i":0,"j":1,"k":1,"m":2,"id":"0-1-1-2"}],[{"i":0,"j":0,"k":1,"m":0,"id":"0-0-1-0"},{"i":0,"j":0,"k":2,"m":1,"id":"0-0-2-1"},{"i":0,"j":0,"k":0,"m":2,"id":"0-0-0-2"}],[{"i":2,"j":0,"k":2,"m":0,"id":"2-0-2-0"},{"i":2,"j":1,"k":1,"m":1,"id":"2-1-1-1"},{"i":2,"j":2,"k":0,"m":2,"id":"2-2-0-2"}],[{"i":1,"j":2,"k":0,"m":0,"id":"1-2-0-0"},{"i":2,"j":0,"k":1,"m":1,"id":"2-0-1-1"},{"i":0,"j":1,"k":2,"m":2,"id":"0-1-2-2"}],[{"i":0,"j":1,"k":2,"m":0,"id":"0-1-2-0"},{"i":0,"j":2,"k":0,"m":1,"id":"0-2-0-1"},{"i":0,"j":0,"k":1,"m":2,"id":"0-0-1-2"}]];
    let diffCount = [0,0,0,0,0];

    sets.forEach(set => {
        let [a, b, c] = set;
        let diff = 0;
        for (let i = 0; i < attrs.length; i += 1) {
            let attr = attrs[i];
            if (a[attr] !== b[attr] && a[attr] !== c[attr] && b[attr] !== c[attr]) {
                diff += 1;
            } 
        }
        if (!diffCount[diff]) {
            diffCount[diff] = 0;
        }
        diffCount[diff] += 1;
    })

    return diffCount;
}

export default {
    getDefaultState,
    getSets,
    isSet,
    getFormattedTime,
    getSetAnalysis,
    localStorageName,
}