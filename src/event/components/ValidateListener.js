
export default function ValidateListener(listener, func) 
{
    if (typeof listener !== 'function') 
        throw new Error( 'Signal.{fn}: Listener should be a function.'.replace('{fn}', func) );
    
}