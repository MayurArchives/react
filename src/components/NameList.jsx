import React from 'react'

function NameList() {
    const names = ['Mayur', 'Aish', 'Milind', 'Ujju', 'Mayur']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div> {nameList} </div>;
}

export default NameList;
