import dayjs from 'dayjs';
import { shuffle } from '../../common/util';

/*
    i = color
    j = shape
    k = shading
    m = number
*/
export const attrs = ['i','j','k','m'];
export const namedAttr = {
    i: 'color',
    j: 'shape',
    k: 'shading',
    m: 'number of elements',
}
export const colors = [
    'red',
    'green',
    'purple',
];
export const shading = [
    'filled',
    'striped',
    'outlined',
]
export const shape = [
    'circle',
    'squiggle',
    'rectangle',
]
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

export const getSets = (cards) => {
    let sets = [];
    let lookingFor;
    let set;
    let setIds = [];
    let setId;

    for (let i = 0; i < cards.length; i += 1) {
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

export const getNeededCard = (a, b) => {
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

export const isSet = (cards) => {
    if (cards.length === 0) return false;

    console.log(cards)

    const [a,b,c] = cards;
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
    return dayjs().startOf('day')
        .second(seconds)
        .format('H:mm:ss')
}

export const getSetAnalysis = (sets) => {
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