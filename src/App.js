import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Book';
import AllCourses from './components/AllBooks';
import AddBooks from './components/AddBooks';
import Menues from './components/Menues';
import { BrowserRouter as Router, Route,  } from "react-router-dom";
import AllBooks from './components/AllBooks';
function App() {

 /*  const buttonHandler = ()=>{
    // toast("thank you..!!!!!!");
    toast.success("Done...",{
      position:"top-center"
    });
  } */
  return (
    <div className="container">
        <Router>
            <ToastContainer/>
                  {/*  <h1>Shital Jori</h1>
                  <button type="button" class="btn btn-outline-success" onClick={buttonHandler}>Success</button> */}
                  {/* <Header/>
                  <Home/> */}
                  {/* <Course course ={{title:"Java Course" , discription:"It is core java course for beginers."}}/>
                  <Course course ={{title:"Java Course" , discription:"It is core java course for beginers."}}/> */}
                  {/* <AllCourses/>
                  <AddBooks/>  */}
          <Header/>
            <div class="row" style={{margin:"7px"}}>
                <div class="col col-md-4">
                  <Menues/>
                </div>
                    <div class="col col-md-8">
                        <Route path="/" component={Home} exact/>
                        <Route path="/add-books" component={AddBooks} exact/>
                        <Route path="/view-books" component={AllBooks} exact/>
                    </div>
            </div>
        </Router>

    </div>
  );
}

export default App;
