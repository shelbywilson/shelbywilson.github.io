import React from 'react';

export const FrameSizeSelect = ({ size, updateSize, frameSizes, setCustomFrameSize, customFrameSize }) => {
    const selected = customFrameSize ? 'custom' : frameSizes.findIndex(x => {
        return size[0] === x[0] && size[1] === x[1]
    })
    return (
        <select value={selected}
            onChange={(e) => {
                if (e.target.value === 'custom') {
                    setCustomFrameSize(true)
                } else {
                    setCustomFrameSize(false)
                    updateSize([...frameSizes[e.target.value]])
                }
            }}
            >
            {frameSizes.map((size, i) => (
                <option value={i}
                    key={i}
                    >
                    {size[0]}" x {size[1]}"
                </option>
            ))}
            <option value='custom'>
                Custom
            </option>
        </select>
    )
}

export default FrameSizeSelect;