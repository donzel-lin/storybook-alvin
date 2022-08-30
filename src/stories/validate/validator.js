
export const isRequired = (value) => {
  const failed = value !== 0 && !value
  return {
    msg: failed ? errorMessages.isRequired : null,
    type: 'isRequired'
  }
}

export const limitLength = (min, max) => {
  return (value) => {
    const failed = !value || (value.length < min || value.length > max)
    return {
      type: 'limitLength',
      msg: failed ? errorMessages.limitLength + `${min}-${max}位` : null
    }
  }
}

const errorMessages = {
  isRequired: '不能为空',
  limitLength: '长度限制为'
}
