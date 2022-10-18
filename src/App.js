
import './App.css'

//burda fontsawe versiyona dikkat et 
// bunu index yapisritr   <script src="https://kit.fontawesome.com/96a168c04b.js" crossorigin="anonymous"></script>
//versiyon 5.15.4 
function App() {
  return (
    <div className="App">
      <div className='login'>
        <h1>Login</h1>
        <div className='contanier'>
          <div className='top'>
          <i class="fab fa-google"></i>
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-linkedin-in"></i>
          <i class="fab fa-twitter-square"></i>
          <i class="fas fa-apple-alt"></i>
          </div>
          <p className='divider'> <span> Or</span></p>
          <form>
            <label> E-mail</label>
            <input type='email' placeholder='Enter you email'></input>
            <label>Password</label>
            <input type='password' placeholder='Enter you password'></input>
            <div className='remember'>
              <input type='checkbox' checked='checked'/>
                <p>Remember</p>
            </div>
            <button >Login In</button>
          </form>
          <div className='bottom'>
            <p>Forget your password</p>
            <a href='/'>Reset Password</a>
          </div>
          <p className='create'>Create-Account</p>
        </div>
        <div className='theme-toggle'>
          <h2>Light Theme</h2>
          <i class='fas fa-toggle-on'></i>
        </div>
      </div>



    </div>
  );
}

export default App;
