function ClickableButton() {

  const [clicked, setClick] = React.useState(false);

 
  if (clicked) {
 return React.createElement('h1', {}, 'Hello Woooorld!');
 }

  return React.createElement(
    'button', {
        className : 'main-button',
        onClick: () => setClick(true)
  },
    'Click to Reveal'
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(React.createElement(ClickableButton));