import React, { useState, useEffect } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import { getDefaultState, getSets, isSet, getFormattedTime, getSetAnalysis, localStorageName } from './_set-util';
import SetHelp from './SetHelp';
import SetCard from './SetCard';
import SetsPossible from './SetsPossible';

export const Set = () => {
    /*
     *
    */
    const [state, setState] = useState(getDefaultState())

    /*
     *
    */
    const [gameOver, setGameOver] = useState(false);

    const resetGame = () => {
        localStorage.removeItem(localStorageName);
        setGameOver(false);
        setState(getDefaultState());
        setInit(false);
    }

    /*
     *
    */
    const [showPossibleSets, setShowPossibleSets] = useState(false);
    const toggleShowSets = (newState) => setShowPossibleSets(prevState => newState || !prevState);
    
    /*
     *
    */
    const [timerIntervalId, setTimerIntervalId] = useState(null);

    const setTimer = () => {
        const id = setInterval(() => {
            setState(state => ({...state, timer: state.timer + 1}));
          }, 1000);

        setTimerIntervalId(id);
    }

    useEffect(() => {
        if (gameOver === true) {
            clearInterval(timerIntervalId);
        }
    }, [gameOver])

    /*
     *
    */
    const [isInit, setInit] = useState(false);

    useEffect(() => {
        if (isInit === false) {
            init();
        }
    }, [isInit]);

    const init = () => {
        let n = 0;

        const addCardDelay = function () {  
            if (n < 12) {
                addCard();
                setTimeout(() => addCardDelay(), 100);
            } else {
                setInit(true);
            }
            n += 1;
        }
        addCardDelay();

        setTimer();
    }

    useEffect(() => {
        if (state.selected.length === 3) {
            if (isSet(state.selected)) {
                // alert('set found!')
                setFound();
            } else {
                alert('not a set!')
                setState({...state, selected: [], wrong: state.wrong += 1})
            }
        }
    }, [state.selected])

    const toggleSelect = (card) => {
        let selected = [...state.selected];
        const cardIndex = selected.findIndex((c) => c.id === card.id);

        if (cardIndex === -1) {
            selected.push(card);
        } else {
            selected.splice(cardIndex, 1);
        }
        setState(prevState => ({ ...prevState, selected}))
    }

    const setFound = () => {
        const {
            remainingCards,
            cards,
            selected,
        } = state;
        let cardIndex;

        let found = [...state.found]
        found.push(selected)

        selected.forEach((card) => {
            cardIndex = cards.findIndex((c) => c.id === card.id);
            if (cardIndex >= 12) {
                // remove extra cards from no set rounds
                cards.splice(cardIndex, 1);
            } else {
                cards.splice(cardIndex, 1, remainingCards.pop() || {id: '', placeholder: true});
            }
        })

        setState(prevState => ({...prevState, selected: [], remainingCards, cards, found}))
        setShowPossibleSets(false);

        // console.log(getSetAnalysis(getSets(getCards())));
        console.log(getSetAnalysis(found));
    }

    useEffect(() => {
        if (state.found.length > 0) {
            setStateInLocalStorage();
        }
    }, [state.found, state.timer])

    function setStateInLocalStorage() {
        localStorage.setItem(localStorageName, JSON.stringify(state));
    }

    const addCard = () => {
        const {
            remainingCards,
            cards,
        } = state;

        if (remainingCards.length > 0) {
            cards.push(remainingCards.pop())
        }

        setState(prevState => ({...prevState, remainingCards, cards}))
    }

    const sets = getSets(state.cards);

    if (sets.length === 0 && isInit === true) {
        if (state.remainingCards.length === 0) {
            // game over
            if (!gameOver) {
                setGameOver(true);
            }
        } else {
            // add extra card
            addCard();
        }
    }

    return (
        <div className='set' data-gameover={gameOver} data-found={state.found.length - 1}>
            <SetHelp
                toggleShowSets={toggleShowSets}
                showPossibleSets={showPossibleSets}
                sets={isInit ? sets : []}
                found={state.found}
                remainingCards={state.remainingCards}
                wrong={state.wrong}
                timer={state.timer}
                resetGame={resetGame}
                />

            <div className='set__container'>
                <div className={`set__container-inner ${showPossibleSets ? "set__container-inner-auto" : ""}`}>
                    <div className='set__in-play'>
                        <div className='set__metadata'>
                            <div className='set__metadata__remaining'>
                                {state.remainingCards.slice(-4).map((card,i) => 
                                    <div key={i} className='set-deck__card'></div>
                                )}
                            </div>
                            <div className='set__found'>
                                <CSSTransitionGroup
                                    transitionName='slide'
                                    transitionEnterTimeout={1700}
                                    transitionLeaveTimeout={0}
                                    >
                                    {state.found.map((set,i) => 
                                        <div key={i} className='set-deck'>
                                            {set.map((card,j) => 
                                                <div key={j} className='set-deck__card'></div>
                                            )}
                                        </div>
                                    )}
                                </CSSTransitionGroup>
                            </div>
                        </div>

                        <CSSTransitionGroup
                            transitionName='deal'
                            transitionEnterTimeout={1200}
                            transitionLeaveTimeout={1200}
                            transitionAppear={true}
                            transitionAppearTimeout={1200}
                            >
                            {state.cards.map((card,i) => (
                                <div className='set-card__container'
                                    key={card.id}
                                    data-i={i}
                                    >
                                    <SetCard
                                        card={card}
                                        toggleSelect={toggleSelect}
                                        selected={state.selected.findIndex((c) => c.id === card.id) > -1}
                                        />
                                </div>
                            ))}
                        </CSSTransitionGroup>
                    </div>

                    {showPossibleSets ?
                            <SetsPossible 
                                sets={sets} />
                            :
                            null
                        }
                </div>
            </div>

            {gameOver ? 
                <button className='set__game-over' onClick={() => resetGame()}>
                    <div>Game over! Click for new game</div>
                    <div>{getFormattedTime(state.timer)}</div>
                </button>
                :
                null
            }
        </div>
    )
}

export default Set;