
   

export default function AddBinding(signal, binding) {

        let n = signal._bindings.length;

        do { --n; } while (signal._bindings.at(n) && binding._priority <= signal._bindings.at(n)._priority);

        signal._bindings.insert(binding,n);
}
