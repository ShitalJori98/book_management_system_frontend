import axios from 'axios';
import React , {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import base_url from '../api/SpringBootAPI';
import Book from './Book';

export default function AllBooks() {
        useEffect(() => {
            document.title="All books";
        } , [])

        // function to call server
        const detAllBooksFromServer = ()=>{
            axios.get(`${base_url}/books`).then(
                (response) =>{
                    //console.log(response);
                    console.log(response.data);
                    toast.success("Books has been loaded..", {
                        position:"bottom-center"
                    });
                    setBooks(response.data);
                },
                (error)=>{
                    console.log(error)
                    toast.error("something went wrong", {
                        position:"bottom-center"
                    });
                }
            )
        }

        //calling loading book function
        useEffect(() => {
         detAllBooksFromServer();
        }, [])

    const [books, setBooks] = useState([
       /*  {title:"Core Java" , description:"It is a core java book for beginers.."},
        {title:"ReactJs for beginers" , description:"It is a ReactJs book for beginers.."},
        {title:"Python " , description:"It is a python book for beginers.."} */
    ]);

    const removeBookById=(id)=>{
        setBooks(books.filter((b)=>b.id!=id)); 
    }

    return (
        <div style={{margin:"10px" , padding:"10px", textAlign:"center"}}>
            <h1 style={{border:"1px solid #d3d2d4", fontFamily: "Times New Roman",background:"#e8e3e7"}}>All Books</h1>
            <hr/>
            
            {
                books.length > 0 
               ? books.map((item) => <Book key={item.id} books={item} update={removeBookById}/>)
                 : "No Books Available"
            }
        </div>
    )
}
