export default ({copyPasswordToClipboard, password, passwordRef}) => {
    return <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 pl-4 text-sm"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button 
            className='outline-none bg-blue-700 text-white px-2 pb-1 shrink-0 font-medium'
            onClick={copyPasswordToClipboard}
        >copy</button>
    </div>
}