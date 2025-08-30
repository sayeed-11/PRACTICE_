import React from 'react'
import { db, uploadData } from './fireStore'

const DataUpload = () => {
  return (
    <div>
        <button onClick={uploadData}>upload</button>
    </div>
  )
}

export default DataUpload