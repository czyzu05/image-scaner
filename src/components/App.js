import React, { Component } from 'react'

import ImageSearch from './ImageSearch'

import '../styles/App.css'

const API_KEY = '18055707-bbe538f9e57670f8eb3287a7c'

class App extends Component {
  state = {
    images: [],
  }

  handleGetRequest = async (e) => {
    e.preventDefault()

    const searchTerm = e.target.elements.searchValue.value

    const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
    const request = await fetch(URL)
    const response = await request.json()

    this.setState({
      images: response.hits
    })

    console.log(this.state.images)
  }

  render() {
    return (
      <div className="App">
        <ImageSearch handleGetRequest={this.handleGetRequest} />
      </div>
    )
  }
}

export default App;

