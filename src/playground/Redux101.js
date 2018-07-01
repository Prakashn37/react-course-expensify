import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 }) =>
    ({
        type: 'INCREMENT',
        incrementBy
    });

const decrementCount = ({ decrementBy = 1 }) =>
    ({
        type: 'DECREMENT',
        decrementBy
    });

const setCount = ({ count }) =>
    ({
        type: 'SET',
        count
    });

const resetCount = () =>
    ({
        type: 'RESET'
    });

//Reducer
//1. Reducers are pure functions(Function operates only on parameters passed to it)
//2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    const incrementBy = action.incrementBy ? action.incrementBy : 1;
    const decrementBy = action.decrementBy ? action.decrementBy : 1;
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;

    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 100 }));

store.dispatch(decrementCount({}));

store.dispatch(setCount({ count: -100 }));

