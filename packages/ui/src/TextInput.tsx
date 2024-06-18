"use client"

export const TextInput = ({
    placeholder,
    label,
    onChange
}:{
    placeholder:string,
    label: string,
    onChange: (value: string) => void
}) => {

    return <div className="pt-2">
        <label className="block mb-2 text-sm font-medium text-gray-900">{label}</label>
        <input onChange={(e) => onChange(e.target.value)} placeholder={placeholder} ></input>
    </div>
    
}