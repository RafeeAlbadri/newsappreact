import React,{Component} from 'React';
import ReactDOM from 'react-dom';


 class Articles extends Component{
    constructor(){

        super()

        this.state = {
            

        }


     }
        


   
    
        render(){
            return (

                <div className="header">
                <img src="assets/logo.png" alt=""></img>
                  <img id="mag" src="assets/mag.png" alt=""></img>
                  <input placeholder="search a topic" type="text" name="" id="search"></input>
               
              

                {
                    this.state.art.map((item,i)=>{

                        return 
                        <div className="container">
                        <img width="150px" height="150px"  src="{item.urlToImage}" alt=""></img>
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