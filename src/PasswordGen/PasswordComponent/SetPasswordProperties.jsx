import LengthRange from './LengthRange'
import NumberCheckBox from './NumberAllowed'
import CharacterCheckBox from './CharAllowed'

export default ({length, numberAllowed, charAllowed, setLength, setNumberAllowed, setCharAllowed}) => {
    return <div className="flex text-sm gap-x-7">
        <LengthRange
            length={length}
            setLength={setLength}
        />
        <NumberCheckBox
            numberAllowed={numberAllowed}
            setNumberAllowed={setNumberAllowed}
        />
        <CharacterCheckBox
            charAllowed={charAllowed}
            setCharAllowed={setCharAllowed}
        />
    </div>
}