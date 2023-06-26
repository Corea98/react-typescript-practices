import { BrowserRouter, Routes, Route, Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';

import './App.css';
import Homepage from './pages';


const Users = () => (
  <Routes>
    <Route path='/' element={ <UsersList /> } />
    <Route path=':id' element={ <UserDetail /> } />
  </Routes>
)

const UsersList = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const onlyActive = searchParams.get('onlyActive');

  return (
    <>
      <p>List of users</p>
      { onlyActive && <p>Only active users? { onlyActive }</p> }

      <button onClick={() => navigate("/users/1")}>Go to user 1</button>
    </>
  )
}

type UserDetailParam = {
  id: string;
}

const UserDetail = () => {
  const { id } = useParams<UserDetailParam>();

  return (
    <p>User detail, user id: { id }</p>
  )
}




function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <a href='/users'>Go to users</a>
            </li>

            <li>
              <Link to='/'>Homepage</Link>
            </li>

            <li>            
              <Link to='/users'>Users list</Link>            
            </li>

            <li>
              <Link to='/users/2'>User detail</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={ <Homepage /> } />

          {/* Nested routes */}
          <Route path='/users/*' element={ <Users /> }/>

          {/* 404 page */}
          <Route path='*' element={ <p>404 error page </p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
