import React from 'react'

import './form-input.styles.scss'

const FormInput = ({label, inputoptions}) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputoptions} />
      {label && (
        <label className={`${inputoptions.value.length ? 'shrink': ''} form-input-label`}>{label}</label>
      )}
    </div>
  )
}

export default FormInput
