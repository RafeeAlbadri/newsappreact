import React, { Component } from 'React';
import ReactDOM from 'react-dom';


class Articles extends Component {
    constructor() {

        super()

        this.state = {
            art: []
        }


        this.getNews()

    }

    async getNews() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=iraq&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
        let x = await response.json()
        let art = this.state.art
        this.setState({
            art: x
        })
    }

    render() {
        return (

            <div className="container">
                <img src="assets/logo.png" alt=""></img>
                <img id="mag" src="assets/mag.png" alt=""></img>
                <input placeholder="search a topic" type="text" name="" id="search"></input>



                {
                    this.state.art.map((item, i) => {

                        return
                        <div className="ar" key="{i}">
                            <img width="150px" height="150px" src="{item.urlToImage}" alt=""></img>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <time>{item.publishedAt}</time>
                        </div>
                    })
                }
            </div>


        )
    }


}

// Define a statless components
function App() {
    return (
        <Articles />
    )
}

// Display content
ReactDOM.render(<App />, document.getElementById('root'))
