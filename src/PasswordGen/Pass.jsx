import React, {useState, useEffect, useRef, useCallback} from "react"
import InputField from "./PasswordComponent/InputField"
import SetPasswordProperties from "./PasswordComponent/SetPasswordProperties"

export default () => {
    const [length, setLength] = useState(10)
    const [numberAllowed, setNumberAllowed] = useState(true)
    const [charAllowed, setCharAllowed] = useState(false)
    const [password, setPassword] = useState("")

    const PasswordGenerator = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed)str+="0123456789"
        if(charAllowed)str+="!@#$%^&*()-_=+{}[]?~"
    
        for (let i = 1; i <= length; i++) {
            let charIndex = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(charIndex)
        }
        setPassword(pass)
    }, [length, numberAllowed, charAllowed, setPassword])

    // useRef hook
    const passwordRef = useRef(null)
    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, length)
        window.navigator.clipboard.writeText(password.slice(0, length))
    }, [password])

    // useEffect hook
    useEffect(() => {
        PasswordGenerator()
    }, [length, numberAllowed, charAllowed, PasswordGenerator])

    return <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-8 text-orange-500 bg-gray-800">
            <div className="text-white text-center mb-4">Password Generator</div>
            <InputField
                copyPasswordToClipboard={copyPasswordToClipboard}
                password={password}
                passwordRef={passwordRef}
            />
            <SetPasswordProperties
                length={length}
                setLength={setLength}
                numberAllowed={numberAllowed}
                setNumberAllowed={setNumberAllowed}
                charAllowed={charAllowed}
                setCharAllowed={setCharAllowed}
            />
        </div>
    </>
}