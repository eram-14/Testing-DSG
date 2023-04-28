import React from 'react'

const Test = ({pageContext}) => {
    console.log('pageContext',pageContext.data);
    const {data}=pageContext
  return (
    <div>{data.title}</div>
  )
}

export default Test