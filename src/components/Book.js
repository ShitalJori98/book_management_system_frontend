import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import base_url from '../api/SpringBootAPI';


export default function Course({books, update}) {

    const deleteBook= (id)=>{
        axios.delete(`${base_url}/books/${id}`).then(
            (response)=>{
                console.log(response);
                toast.success("Book is Deleted");
                update(id);
            },(error)=>{
                console.log(error)
                toast.error("Book not Deleted")
            }
        )
    }
    return (
        <div>
            <div class="card my-3 py-2 "  style={{background:"#e8e3e7"}}>
                <div class="card-body">
                  <h5 class="card-title">{books.title}</h5>
                    <p class="card-text">{books.description}</p>
                </div>
                    <div className="container">
                        {/* <button className="btn btn-primary btn-lg">Update</button>{" "} */}
                        <button className="btn  btn-lg" style={{backgroundColor:"#23aacc", color:"white"}} onClick={()=>{
                            deleteBook(books.id);
                        }}>Delete</button> 
                    
                    </div>
            </div>
        </div>  
    )
}
