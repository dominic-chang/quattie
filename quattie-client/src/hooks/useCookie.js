import { useEffect, useState } from 'react'

const PREFIX = 'quattie'

export default function useCookie(key, initialValue) {
    const prefixedKey = PREFIX + "-" + key
    const [value, setValue] = useState(() => {
        const cookies = JSON.parse(`{"${document.cookie.split(" ").join("").split(";").map(el => el.split("=").join('":"')).join('","')}"}`)
        //const jwtValue = localStorage.getItem(prefixedKey)
        const jwtValue = cookies['jwt']
        console.log("cookie "+jwtValue)
        if (jwtValue != null) return jwtValue //Set state from local storage
        if (typeof initialValue === 'function') {// execute initialValue if function
            return initialValue()
        } else {
            return initialValue
        }
    })


    useEffect(() => {// Update local storage if the prefixed key or value(state) is changed
        document.cookie = `${key}=${value}`
        localStorage.setItem(prefixedKey, value)
    }, [prefixedKey, value])


    return[value, setValue] //return the state and setter
}

