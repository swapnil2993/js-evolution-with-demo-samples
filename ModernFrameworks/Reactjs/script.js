'use strict';

const e = React.createElement;

class AppLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Container />
      </React.Fragment>
    )
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="header">
        TODO List - ReactJS
      </div>
    )
  }
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      itemText: '',
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleInput(e) {
    this.setState({ itemText: e.target.value })
  }

  handleAddBtn() {
    const { itemText } = this.state;
    if (itemText === '') {
      alert("For Gods Sake just type something before adding anything!");
    } else {
      this.setState((prevState) => {
        return { itemText: '', list: prevState.list.concat({ value: itemText, uid: prevState.list.length + 1 }) }
      });
    }
  }

  handleRemove(uid) {
    this.setState((prevState) => {
      return {
        list: prevState.list.filter((record) => {
          return record.uid !== uid
        })
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-wrapper clearfix">
          <input
            type="text"
            id="todo-input"
            placeholder="New Todo Item..."
            onChange={this.handleInput}
            value={this.state.itemText}
          />
          <span className="addBtn" onClick={this.handleAddBtn}>Add</span>
        </div>
        <div className="margin-t-b">
          <ul>
            {
              this.state.list.map((item) => {
                return (
                  <ListItem item={item} key={item.uid} onRemove={this.handleRemove} />
                )
              })
            }
          </ul>
        </div>
        {
          this.state.list.length === 0 ? (
            <p className="help">Having short term memory. Note down the list of things to do.</p>
          ) : null
        }

      </div>
    )
  }
}

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onRemove = this.onRemove.bind(this);
  }

  onRemove(e, uid) {
    e.preventDefault();
    this.props.onRemove(uid);
  }

  render() {
    const { item } = this.props;
    return (
      <li>
        {item.value}
        <span className="close" onClick={(e) => this.onRemove(e, item.uid)}>×</span>
      </li>
    )
  }
}




const domContainer = document.querySelector('#mount-point');
ReactDOM.render(e(AppLayout), domContainer);