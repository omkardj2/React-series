function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.setAttribute('href',reactElement.props.href);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('target', reactElement.props.target);

    // container.append(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for(const prop in reactElement.props){
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.append(domElement)
}

const reactElement = {
    type:'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to go to google'
}


const mainContainer = document.getElementById("root");

customRender(reactElement,mainContainer)