/**
 * Created by Александр on 11.07.2017.
 */

const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log('%c PREVIOUS STATE', 'color: grey; font-weight: bold;', store.getState());
    console.log('%c ACTION', 'color: blue; font-weight: bold;', action);
    let result = next(action);
    console.log('%c CURRENT STATE', 'color: green; font-weight: bold;', store.getState());
    console.groupEnd();

    return result;
};

export default logger;