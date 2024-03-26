import React, {Component} from "react";

import './App.css';

import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Signin from './components/Signin/Signin.js';
import Register from "./components/Register/Register.js";
import FaceRecognition from "./components/FaceRecognition/FaceRecognition.js"
import ImageRecognition from "./components/ImageRecognition/ImageRecognition.js";
import ImageLinkFormForRecognition from "./components/ImageLinkFormForRecognition/ImageLinkFormForRecognition.js";

import ParticlesBg from "particles-bg";



const initialState = {
      input : '',  // for face detection
      input2 : "",
      imageUrl : "", // for face detection
      imageUrl2 : "",
      box : {},
      list : [],
      route : "signin",  // 4 routes we are using : signin, register, home, signout
      isSignedIn : false,
      user : {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
  }


class App extends Component {
  
  constructor(){
    super();
    this.state ={
      input : '',  // for face detection
      input2 : "",
      imageUrl : "", // for face detection
      imageUrl2 : "",
      box : {},
      list : [],
      route : "signin",  // 4 routes we are using : signin, register, home, signout
      isSignedIn : false,
      user : {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: ""
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }


  // ----------------------- Face Detection ------------------------------------------ //

  calculateFaceLocation = (data) => {
    const calrifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      left: calrifaiFace.left_col * width,
      top: calrifaiFace.top_row * height,
      right: width - (calrifaiFace.right_col * width),
      bottom: height - (calrifaiFace.bottom_row * height) + 9
      // left: calrifaiFace.left_col,
      // top: calrifaiFace.top_row,
      // right: (calrifaiFace.right_col),
      // bottom: (calrifaiFace.bottom_row)
    };
  }

  displayFaceBox = (boxOfFaceLocation) => {
    this.setState({box: boxOfFaceLocation});
  }

  onInputChange = (event) => {
    // console.log("yes It worked")
    this.setState({input: event.target.value}); //  set input to onInputChange parameter
  }

  onFaceDetectionButtonSubmit = () => {
    this.setState({imageUrl: this.state.input}); // set imageUrl to whatever input is

    //updating rank
    fetch("http://localhost:3000/image",{
        method: "put",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            id: this.state.user.id,
        })
      })
      .then(response => response.json())
      .then(count => {
        this.setState(Object.assign(this.state.user, {entries: count}))
      })
      .catch(error => console.log('error', error))



    fetch("http://localhost:3000/facedetection",{
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        input : this.state.input
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      const boxOfFaceLocation = this.calculateFaceLocation(result);
      this.displayFaceBox(boxOfFaceLocation);
    })
    .catch(error => console.log('error', error));
  
  }

  // ----------------------- Finish Face Detection ------------------------------------------ //

  
  // ----------------------- Image Recognition ------------------------------------------ //

  onInputChange2 = (event) => {
    // console.log("yes It worked")
    this.setState({input2: event.target.value}); //  set input to onInputChange parameter
  }

  onImageRecognitionButtonSubmit = () => {
    this.setState({imageUrl2: this.state.input2}); // set imageUrl to whatever input is

    // update rank
    fetch("http://localhost:3000/image",{
      method: "put",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          id: this.state.user.id,
      })
    })
    .then(response => response.json())
    .then(count => {
      this.setState(Object.assign(this.state.user, {entries: count}))
    })
    

    fetch("http://localhost:3000/imagerecognition",{
      method: "post",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        input2 : this.state.input2
      })
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      const listOfImageRecognition = this.getListOfImageRecognition(result);
      this.setCalrifaiListOfImageRecognition(listOfImageRecognition);
    })
    .catch(error => console.log('error', error));
  
  }

  getListOfImageRecognition = (data) => {
    const calrifaiListOfImageRecognition = data.outputs[0].data.concepts;
    var emptyList = [];
    calrifaiListOfImageRecognition.map((dict) =>{
      emptyList.push(dict.name);
    })
    return emptyList;
  }

  setCalrifaiListOfImageRecognition = (listOfImageRecognition) => {
    this.setState({list: listOfImageRecognition});
  }

  // ----------------------- Finish Image Recognition ------------------------------------------ //


  // ----------------------- Signin, Signout, Register ------------------------------------------ //
  
  onRouteChange = (route) => {
    if (route === "signout"){
      this.setState(initialState);
    } else if (route === "home"){
      this.setState({isSignedIn: true});
    }
    this.setState({route: route});
  }

  // ----------------------- Finish Signin, Signout, Register ------------------------------------------ //

  render(){
    const {isSignedIn, imageUrl, imageUrl2, route, box, list} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        {route === "home" 
          ? <div> 
            {/* Home page for facedetection and imagerecognition */}
              <Logo /> 
              <Rank name={this.state.user.name} entries={this.state.user.entries}/>
              <ImageLinkForm
              onInputChange={this.onInputChange}
              onFaceDetectionButtonSubmit={this.onFaceDetectionButtonSubmit}
              />
              <ImageLinkFormForRecognition
              onInputChange2={this.onInputChange2}
              onImageRecognitionButtonSubmit={this.onImageRecognitionButtonSubmit}
              />
              <FaceRecognition box={box} imageUrl={imageUrl}/>
              <ImageRecognition list={list} imageUrl2={imageUrl2}/>
            {/* Home page for facedetection and imagerecognition */}
            </div> 
          : (
              route === "signin" 
              ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
              : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            )
        }
      </div>
    );
  }
}

export default App;
