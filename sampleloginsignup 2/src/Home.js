import React, { Component } from "react";
import Litho from "./litho.jpeg";
import Frame from "./frame.jpeg";
import Custom from "./custom.jpeg"


class Home extends Component{
    render(){
        return(
        
            <div class="container-fluid bg-white" style={{padding: "0px"}}>
                <br></br>
                <br></br>

            <div class="text-center" style={{minheight: "100%"}}>
                
                <div class="row justify-content-around vertical-center">
    
                    <div class="col-10 col-md-3 my-2 primary rounded card-shadow" style={{minHeight: "400px"}}>
                        <div>
                            <div > LITHOPHANES </div>
                            <div style={{display: "flex", minheight: "288px", justifycontent: "center"}}>
                                <img class="img-fluid img-thumbnail my-auto" src={Litho}
                                    style={{maxheight:"288px"}}></img>
                            </div>
                            
                        </div>
                    </div>
    
                    <div class="col-10 col-md-3 my-2 primary rounded card-shadow" style={{minHeight: "400px"}}>
                        <div>
                            <div > FRAMES </div>
                            <div style={{display: "flex", minheight: "288px", justifycontent: "center"}}>
                                <img class="img-fluid img-thumbnail my-auto" src={Frame}
                                    style={{maxheight:"288px"}}></img>
                            </div>
                            
                        </div>
                    </div>
    
                    <div class="col-10 col-md-3 my-2 primary rounded card-shadow" style={{minHeight: "400px"}}>
                        <div>
                            <div > CUSTOM 
                            </div>
                            <div style={{display: "flex", minheight: "288px", justifycontent: "center"}}>
                                <img class="img-fluid img-thumbnail my-auto" src={Custom}
                                    style={{height:"200px", width:"300px"}}></img>
                            </div>
                            
                        </div>
                    </div>
    
    
                </div>
    
    
            </div>
    
        </div>
                

        );
    }
}
export default Home;