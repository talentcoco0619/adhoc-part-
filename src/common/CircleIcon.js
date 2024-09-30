import React from 'react'

const CircleIcon = ({ Icon }) => {
  return (
    <div
      style={{
        width: '38px',
        height: '38px',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      {/* Dynamic Icon */}
      <Icon
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '50%',
          height: '50%',
        }}
      />

      {/* Circle SVG */}
      <svg width="100%" height="100%" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13.114" stroke="#000" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default CircleIcon
