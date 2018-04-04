import DeepFreeze from "./DeepFreeze";

export default function MakeImmutable(value, deep) {

    if (deep === undefined) deep = false;

    if (Array.isArray(value))
    {
        for (let i = 0; i < value.length; i++)
        {
            if (deep) {
                DeepFreeze(value[i])
            } else {
                Object.freeze(value[i]);
            }
        }
    } else {

        if (deep) {
            DeepFreeze(value)
        } else {
            Object.freeze(value);
        }
    }

    return value;

}