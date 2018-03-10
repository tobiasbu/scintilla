
var AssetTypeHandler = new tobi.Injector();

var LOADER_STATE = {
    NONE : 0,
    IDLE : 1,
    PENDING : 2,
    LOADING : 3,
    PROCESSING : 4,
    ERROR : 5,
    FINISHED : 6,
    DONE : 7, 
}