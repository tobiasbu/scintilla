
export default function MakeSealeble(value) {

    if (Array.isArray(value))
    {
        for (let i = 0; i < value.length; i++)
        {
            Object.seal(value[i]);
        }
    } else {

        Object.seal(value);

    }

    return value;

}