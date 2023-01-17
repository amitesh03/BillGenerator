import './App.css';
import img from './bg-sidebar-desktop.svg';
function App() {
  return (
    <><div className='parent'>
    <div className='img'>
    <img src={img} alt="image" />
    </div>
    <div className='info'>
    <h1 className='heading'>Your Information</h1>
    <form className='form' action="">
    <label htmlFor="name">Name</label>
    <input type="text" placeholder='Enter your name' />
    <label htmlFor="email">Email</label>
    <input type="email" placeholder='Enter your email'/>
    <label htmlFor="phone">Phone</label>
    <input type="tel" placeholder='Enter your Phone Number'/>
    </form>
    </div>
    </div>
    </> 
  );
}

export default App;
