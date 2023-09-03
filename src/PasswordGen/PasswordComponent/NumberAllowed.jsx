export default ({numberAllowed, setNumberAllowed}) => {
    return <div className="flex items-center">
        <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => setNumberAllowed(prev => !prev)}
        />
        <label htmlFor='numberInput'>Numbers</label>
    </div>
}