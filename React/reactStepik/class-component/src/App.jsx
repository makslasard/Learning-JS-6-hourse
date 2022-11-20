import React, {Component} from 'react';


class App extends Component() {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
      post: [],
      loading: true
    };

    this.handleClick = this.handleClick.bind(this)
  }

  // handleClick = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // handleClick() { // Метод не поймет что за this используется. this будет undefined
  //   this.setState({count: this.state.count + 1})
  // }
  // Чтобы метод понял что за this. Нужно исопльзовать привязку к context


  componentDidMount() { // Запрос на сервер в методе жизненного цикла
    console.log('Compoent did mount')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(responce => responce.json())
      .then(data => this.setState({posts: data, loading: false})) // Запрошенные данные сразу помещаются в state
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.loading ? <h3>Loading...</h3> : <h3>{this.state.post.length} was loading</h3>
        }
      </div>
    )
  }
}

export default App;
