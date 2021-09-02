import axios from 'axios';
import React,{useEffect, useState}from 'react'
import { toast } from 'react-toastify';
import base_url from '../api/SpringBootAPI';
 
export default function AddBooks() {
    useEffect(() => {
        document.title="Add Books"
     }, []);

const [book, setBook] = useState({});

//form handler function 
const handleForm = (e) =>{
    console.log(book);
      postDataOnServer(book);
    e.preventDefault();
}

//creating function to post data on server
   const postDataOnServer = (data)=>{
        axios.post(`${base_url}/books`,data).then(
            (response)=>{
                //console.log(response);
                console.log(response.data);
                toast.success("Book Added Successfully..");
            },(error)=>{
                console.log(error)
                toast.error("something went wrong")
            }
        )
   }

    return (
        <React.Fragment>
            <h3 className="text-center my-3"> Fill Book Details</h3>
            <form  onSubmit={handleForm} style={{margin:"20px" , padding:"20px"}}>
                <div >
                    <label class="form-label">Book Id</label>
                    <input type="text" 
                       class="form-control"
                       id="bookid"
                       placeholder="Enter Id Here"
                       onChange ={(e)=>{
                            setBook({...book, id:e.target.value})
                       }}
                      />
                 </div>
                 <div >
                    <label  class="form-label">Book Title</label>
                    <input type="text" 
                       class="form-control"
                       id="title"
                       placeholder="Enter Title Here"
                       onChange ={(e)=>{
                        setBook({...book, title:e.target.value})
                   }}
                      />
                 </div>
                 <div >
                    <label class="form-label">Book Description</label>
                    <textarea class="form-control"
                     id="description"
                      rows="3"
                       placeholder="Enter description Here"
                       onChange ={(e)=>{
                        setBook({...book, description:e.target.value})
                   }}>

                   </textarea>
                 </div>
                 <div className="container py-2 my-2 text-center">
                        <button type = "submit" className="btn btn-success btn-lg" /* style={{float:"left"}} */>Add Books</button>{" "}
                        <button type = "reset" className="btn btn-primary btn-lg" /*  style={{float:"right"}} */>Clear</button> 
                    
                    </div>
            </form>

        </React.Fragment>
    )
}
