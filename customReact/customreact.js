function customRender(reactElement,conatiner){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target);

    conatiner.appendChild(domElement);

}



const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}

const mainContainer = document.querySelector("#Root")

customRender(reactElement,mainContainer)