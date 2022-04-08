import logo from './logo.svg';
import './App.css';

function App() {
  function buttonClicked() {
    alert("Thank You")
  }  
  return (
    <div className="App">
      <form class="container">
          {/* email input */}
           <div class="form-outline mb-4">
             <input type="email" id="form1Example1" class="form-control"/>
             <label class="form-label" for="form1Example">Email address</label>
           </div>
           {/* password input */}
           <div class="form-outline mb-4">
             <input type="password" id="form1Example2" class="form-control" />
             <label class="form-label" for="form1Example2">Password</label>
            </div>
            {/* 2 column grid layout for inline styling */}
           <div class="row mb-4">
               <div class="col d-flex justify-content-center">
                    {/* Checkbox */}
                    <div class="form-check">
                       <input classname="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                        <label classname="form-check-label" for="form1Example3"> Remember me </label>
                     </div>
                 </div>
                  <div class="col">
                     {/* Simple link  */}
                     <a href="#!">Forgot password?</a>
                   </div>
             </div>
            {/* Submit button  */}
            <button type="submit" classname="btn btn-primary btn-block" onClick={buttonClicked}>Sign in</button>
       </form>
    </div>
  );
}

export default App;
