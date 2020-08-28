import React, { Component } from 'react'

import ImageSearch from './ImageSearch'
import ImageList from './ImageList'

import '../styles/App.css'

const API_KEY = '18055707-bbe538f9e57670f8eb3287a7c'

class App extends Component {
  state = {
    images: [],
    error: null,
  }

  handleGetRequest = async (e) => {
    e.preventDefault()

    const searchTerm = e.target.elements.searchValue.value

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(URL)
    const response = await request.json()

    if (!searchTerm) {
      this.setState({
        error: "Place provide a value"
      })
    } else {
      this.setState({
        error: null,
        images: response.hits
      })
    }


  }

  render() {
    return (
      <div className="App">
        <ImageSearch handleGetRequest={this.handleGetRequest} />
        {this.state.error !== null ? <h3 style={{ color: 'white', textAlign: 'center', fontSize: '25px' }}>{this.state.error}</h3> : <ImageList images={this.state.images} />}
      </div>
    )
  }
}

export default App;

