import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import MainPage from './pages/MainPage';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorPage from './pages/ErrorPage';
import GlobalStyles from './assets/GlobalStyles';
import CommonPage from './pages/CommonPage';
import ReservationPage from './pages/ReservationPage';
import HotelAboutPage from './pages/HotelAboutPage';
import HotelListPage from './pages/HotelListPage';
import RoomDetailModalPage from './pages/RoomDetailModalPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import HotelMainPage from './pages/HotelMainPage';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route component={MainPage} exact path='/' />
            <Route component={SignUpPage} path='/signup' />
            <Route component={CommonPage} path='/common' />
            <Route component={ReservationPage} path='/reservation' />
            <Route component={HotelMainPage} path='/hotel' />
            <Route component={HotelAboutPage} path='/hotelAbout' />
            <Route component={RoomDetailModalPage} path='/roomDetail' />
            <Route component={HotelListPage} path='/hotel' />
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
        <GlobalStyles />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
