
const ButtonStatus = {
    /**
     * No key/button status
     * @param {number} 0
     */
    NONE : 0,
    
    /**
     * 
     */
    IDLE : 1,
    /**
     * Key/button is pressed
     * @param {number} 2
     */
    PRESSED : 2,
     /**
     * Key/button was pressed
     * @param {number} 3
     */
    POST_PRESSED : 3,
    /**
     * Key/button is released
     * @param {number} 4
     */
    RELEASED : 4,
};

//Object.freeze(ButtonEvent);

export default ButtonStatus;