import React from 'react'

export default function Header() {
    return (
        <div>
           {/*  <h1 className="my-3">
              <b> <center>Welcome to Book Management Application</center> </b> 
            </h1> */}
            <div class="card text-center " style={{marginTop:"10px" , paddingTop:"5px", paddingBottom:"5px", backgroundColor:"#8e04d9", color:"white",fontFamily: "Times New Roman"}}>
                <div class="card-body">
                  <h1 class="card-text"><b>Welcome to Book Management Application</b></h1>
                </div>
            </div>
        </div>
    )
}
