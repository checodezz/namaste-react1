const parent = React.createElement('div', { id: 'parent' }, [React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "I'm an h1 tag from react.createElement()"), React.createElement('h2', {}, "I'm an h2 tag from react.createElement()")]),
React.createElement('div', { id: "child2" }, [React.createElement('h1', {}, "I'm an h1 tag from react.createElement()"), React.createElement('h2', {}, "I'm an h2 tag from react.createElement()")])])


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
