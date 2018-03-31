import SignalBinding from "../SignalBinding";
import IndexOfListener from "./IndexOfListener";
import AddBinding from "./AddBinding";

export default function RegisterListener(signal, listener, listenerContext, priority) {

    let binding = null;
    let index = IndexOfListener(signal, listener, listenerContext);

    if (index !== -1) {
        binding = signal._bindings[index];
    } else {

        binding = new SignalBinding(signal, listener, listenerContext, priority);
        AddBinding(signal, binding);
    }

    return binding;
    
}