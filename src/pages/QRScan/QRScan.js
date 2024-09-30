import React, { Fragment, useState } from 'react'
import QrReader from 'react-qr-scanner'

const QRScan = () => {
  const [delay, setDelay] = useState(100)
  const [result, setResult] = useState('No result')
  const handleScan = (data) => {
    setResult(data)
  }
  const handleError = (err) => {
    console.error(err)
  }

  const previewStyle = {
    height: 320,
    width: 320,
  }

  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>{result}</p>
    </div>
  )
}

export default QRScan
