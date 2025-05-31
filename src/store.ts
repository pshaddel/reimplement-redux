import { deepFreeze } from "./deep_freeze";

const state = deepFreeze({
    counter: 0
});

const incrementAction = {
    type: 'INCREMENT'
};

const decrementAction = {
    type: 'DECREMENT'
};

function reducer(previousState: {
    readonly counter: number
}, action: {
    type: string
}) {
    switch (action?.type) {
        case 'INCREMENT': {
            const newState = {
                counter: previousState.counter + 1
            };
            return deepFreeze(newState)
        }
        case 'DECREMENT': {
            const newState = {
                counter: previousState.counter - 1
            };
            return deepFreeze(newState)
        }
        default: {
            // no change
            return previousState
        }
    }
};

// const currentState = deepFreeze({
//     counter: 0
// });

// const s1 = reducer(currentState, incrementAction);
// const afterIncrement = reducer(s1, incrementAction);
// console.log(afterIncrement);

type Reducer = (state: any, action: { type: string }) => any;
export function createStore(reducer: Reducer, initialState: any) {
    let state = deepFreeze(initialState);

    let listeners: (() => void)[] = [];

    return {
        getState: () => state,
        dispatch: (action: { type: string }) => {
            const nextState = reducer(state, action);
            if (nextState !== state) {
                state = deepFreeze(nextState);
                listeners.forEach(listener => listener()); // call all listeners
            }
        },
        subscribe: (listener: () => void) => {
            // This is a simple implementation, in a real-world scenario you would want to handle subscriptions properly
            listeners.push(listener);
            return {
                unsubscribe: () => {
                    listeners = listeners.filter(l => l !== listener);
                }
            }
        }
    }
}

export const store = createStore(reducer, state);