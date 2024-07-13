import React from 'react'
import ReactDOM from 'react-dom'

function newEle() {
    return (
        <>
            <h1>THis is the new element </h1>
            <h2>but this element gives error when import because ,</h2>
            <h3>file extension should be jsx in vite </h3>
            <h3>And file names component name should be capitalized </h3>
            <h1>please note that casing about element name is compulsory while importing the element not while defining ,so we can define it in any case</h1>
            

        </>


    )
}

export default newEle