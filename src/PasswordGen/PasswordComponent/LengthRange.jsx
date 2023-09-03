export default ({length, setLength}) => {
    return <div className="flex items-center gap-x-2">
        <input 
            type="range" 
            min={10}
            max={99}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
        />
        <label>Length: {length}</label>
    </div>
}