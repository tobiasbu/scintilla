import SignalBinding from "../SignalBinding";
import IndexOfListener from "./IndexOfListener";
import AddBinding from "./AddBinding";

export default function RegisterListener(signal, listener, listenerContext, priority, isOnce) {

    let binding = null;
    let index = IndexOfListener(signal, listener, listenerContext);

    if (index !== -1) {
        binding = signal._bindings[index];
        if (binding.isOnce !== isOnce) {
            throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
        }
    } else {

        binding = new SignalBinding(signal, listener, listenerContext, priority, isOnce);
        AddBinding(signal, binding);
    }

    return binding;
    
}