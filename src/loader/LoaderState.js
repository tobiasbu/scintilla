
const LoaderState = {
    NONE : 0,
    IDLE : 1,
    PENDING : 2,
    LOADING : 3,
    PROCESSING : 4,
    ERROR : 5,
    FINISHED : 6,
    DONE : 7, 
};

Object.freeze(LoaderState);

export default LoaderState;