const e = React.createElement;

class App extends React.Component {
  //1. Mounting 
  constructor(props) {
    super(props);
    this.state = {
      localState: 'initial value',
      derivedValue: ''
    }
    alert('Constructor trigggered.')
  }

  // componentWillMount() {
  //   Deprecated
  // }

  // used when the state is dependent on props, hence whenever the props are changed the state has to be kept in sync.
  static getDerivedStateFromProps(currentProps, currentState) {
    if (currentState.value !== currentProps.value) {
      return {
        derivedValue: calculate(currentProps),
        localState: currentProps.value
      }
    }
    // when null is returned no update is made to the state
    return null;
  }

  componentWillReceiveProps(nextProps) {
    // Deprecated
  }

  // This is the hook method which is invoked immediately
  // after the component did mount on the browser DOM. 
  componentDidMount() {
    alert('Actual DOM elements mounted in the DOM')
  }

  // componentWillReceiveProps(nextProps) {
  // Update local state based on new props
  // }

  shouldComponentUpdate(nextProps, nextState) {

  }

  // componentWillUpdate(nextProps, nextState) {
  // Deprecated
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // This method gets called after the render created the React element and before it is actually updated from virtual DOM to actual DOM. This phase is known as pre-commit phase.
    // This method has access to both previous and current props and state.
    // If the method getSnapshotBeforeUpdate returns a value, the same is available in componentDidUpdate as the third parameter, where the UI can be updated to make is synced before and after render.
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.localState !== this.state.localState) {
      // make an api call
    }
  }

  componentWillUnmount() {

  }

  render() {
    // Pure method. Does not produce any side effects.
    return (
      <div>
        <h2>Three phases:</h2>
        <h3>1. Mounting</h3>
        <ul>
          <li>
            <b>Constructor</b>
          </li>
          <li>
            <b>getDerivedStateFromProps</b>
          </li>
          <li>
            <b>render</b>
          </li>
          <li>
            <b>componentDidMount</b>
          </li>
        </ul>

        <h3> 2. Updating</h3>
        <ul>
          <li>
            <b>getDerivedStateFromProps</b>
          </li>
          <li>
            <b>shouldComponentUpdate</b>
          </li>
          <li>
            <b>render</b>
          </li>
          <li>
            <b>getSnapshotBeforeUpdate</b>
          </li>
          <li>
            <b>ComponentDidUpdate</b>
          </li>
        </ul>
        <h3>3. UnMounting</h3>
        <ul>
          <li>
            <b>componentWillUnMount</b>
          </li>
        </ul>
      </div >
    );
  }
}


const domContainer = document.querySelector('#mount-point');
ReactDOM.render(e(App), domContainer);