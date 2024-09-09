import React, {memo} from 'react'

const InputForm = ({ invalidFields, setInvalidFields , label, value, setValue, keyPayload, type }) => {
    return (
        <div>
            <label htmlFor='phone' className='text-xs'>{label}</label>
            <input
                type={type || 'text'}
                id="phone"
                className='outline-none bg-[#E7F0FE] p-2 rounded-md w-full'
                value={value}
                // khi thay doi data trong oinput thi se set lai value vao payload
                onChange={(e) => setValue(prev => ({ ...prev, [keyPayload]: e.target.value }))}
                onFocus={() => setInvalidFields([])}
            />
            {invalidFields.length > 0 && invalidFields.some(i => i.name === keyPayload) &&
                <small className='text-red-500 italic'>{invalidFields.find(i => i.name === keyPayload)?.message}</small>}
        </div>
    )
}

export default memo(InputForm)