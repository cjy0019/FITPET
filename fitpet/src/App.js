import './App.css';
import { Route, Switch } from 'react-router-dom';
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
import RentCarDetailPage from './pages/RentCarDetailPage';
import RentCarPage from './pages/RentCarPage';
import HotelMainPage from './pages/HotelMainPage';
import RentalcarMainPage from './pages/RentalcarMainPage';
import DriverInfoPage from './pages/DriverInfoPage';
import { createBrowserHistory } from 'history';
import create from './redux/create';
import { ConnectedRouter } from 'connected-react-router';
import CourseMapPage from './pages/CourseMapPage';

const history = createBrowserHistory();

const store = create(history);

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route component={MainPage} exact path='/' />
            <Route component={CommonPage} path='/common' />
            <Route component={CourseMapPage} path='/course/mymap' />
            <Route component={ReservationPage} path='/hotel/reservation' />
            <Route component={HotelMainPage} path='/hotel' />
            <Route component={HotelAboutPage} path='/hotelAbout' />
            <Route component={RoomDetailModalPage} path='/roomDetail' />
            <Route component={HotelListPage} path='/hotelList' />
            <Route component={RentalcarMainPage} path='/rentalcar' />
            <Route component={RentCarPage} path='/rentcar' />
            <Route component={RentCarDetailPage} path='/rentcardetail' />
            <Route component={DriverInfoPage} path='/driver' />
            <Route component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
        <GlobalStyles />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
