

const mainContainer=document.querySelector('#root')


///react in background convert every jsx into javascript object and render it using react.render method 


const reactElement={
    type:'a',
    props:{
        href:'http://www.google.com',
        target:'_blank'

    },
    children:"click me to go to google"
}

// function customRender(container,reactElement){
//     const element=document.createElement(reactElement.type)
//     element.innerHTML=reactElement.children
//     element.setAttribute('href',reactElement.props.href)
//     element.setAttribute('target',reactElement.props.target)
//     container.appendChild(element)
// }
function customRender(container,reactElement){
    const element=document.createElement(reactElement.type)
    element.innerHTML=reactElement.children
    for(prop in reactElement.props){
        if(prop==='children')continue;
        element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(element) 
}

customRender(mainContainer,reactElement)  