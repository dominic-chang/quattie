import { useEffect, useState } from 'react'

const PREFIX = 'quattie'

export default function useLocalStorate(key, initialValue) {
    const prefixedKey = PREFIX + key
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) return JSON.parse(jsonValue) //Set state from local storage

        if (typeof initialValue === 'function') {// execute initialValue if function
            return initialValue()
        } else {
            return initialValue
        }
    })

    useEffect(() => {// Update local storage if the prefixed key or value(state) is changed
        localStorage.setItem(prefixedKey, JSON.stringify)
    }, [prefixedKey, value])

    return[value, setValue] //return the state and setter
}

