

export default class Test
{
    constructor()
    {
        this.hello = "Hello World!"
    }

    log()
    {
        console.log(this.hello);
    }
}


//module.exports = Test;

global.Test = Test;