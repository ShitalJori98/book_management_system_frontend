import React,{useEffect} from 'react'


export default function Home() {
        useEffect(() => {
           document.title="Home"
        }, [])

    return (
        <div>
            <div style={{background:"#ebd1e3", marginTop:"5px", padding:"20px", textAlign:"center"}}>
                <h2 style={{color:"#912671"}}><b>Book Management System</b></h2>
                <hr/>
                <p><b>
                A Book Management System is a software built to handle the primary housekeeping functions 
                of a library. The management systems also involve maintaining the database for 
                entering new books and recording them.
                </b></p>

                <button type="button" class="btn" style={{backgroundColor:"#912671", color:"white"}}>Get Started</button>
            </div>

            
        </div>
    )
}
