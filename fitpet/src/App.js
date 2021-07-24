import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage';
import GlobalStyles from './assets/GlobalStyles';
import CommonPage from './pages/CommonPage';
import ReservationPage from './pages/ReservationPage';
import HotelsAboutPage from './pages/HotelsAboutPage';
import HotelListPage from './pages/HotelListPage';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} exact path='/' />
          <Route component={LoginPage} path='/login' />
          <Route component={SignUpPage} path='/signup' />
          <Route component={CommonPage} path='/common' />
          <Route component={ReservationPage} path='/reservation' />
          <Route component={HotelsAboutPage} path='/hotels' />
          <Route component={HotelListPage} path='/hotel' />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <GlobalStyles />
    </ErrorBoundary>
  );
}

export default App;
