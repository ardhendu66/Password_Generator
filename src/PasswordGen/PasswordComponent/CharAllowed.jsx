export default ({charAllowed, setCharAllowed}) => {
    return <div className="flex items-center">
        <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => setCharAllowed(prev => !prev)}
        />
        <label htmlFor='charInput'>Characters</label>
    </div>
}