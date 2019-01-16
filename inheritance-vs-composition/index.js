class InputBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      type: 'text'
    }
  }
  onChange = (e) => {
    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <div>
        <input type={this.state.type} value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

class CreateForm extends InputBox {

  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Create</button>
      </div>
    )
  }
}

class UpdateForm extends InputBox {
  render() {
    const parent = super.render();
    return (
      <div>
        {parent}
        <button>Update</button>
      </div>
    )
  }
}

class CompositionInput extends React.Component {
  render() {
    return (
      <input />
    )
  }
}

class CompositionInputBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CompositionInput />
        <button>Composition Button</button>
      </React.Fragment>
    )
  }
}


ReactDOM.render(
  <React.Fragment>
    <UpdateForm />
    <CreateForm />
    <CompositionInputBox />
  </React.Fragment>,
  document.getElementById('mount-point')
);
