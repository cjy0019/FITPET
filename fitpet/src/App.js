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
import CourseMainPage from './pages/CourseMainPage';

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
            <Route
              component={HotelAboutPage}
              path='/accomodations/hotels/:hotelId'
            />
            <Route component={HotelMainPage} exact path='/accomodations' />
            <Route
              component={HotelListPage}
              exact
              path='/accomodations/hotels'
            />
            <Route component={RentCarPage} path='/rentcar/searchcars' />
            <Route component={RentalcarMainPage} path='/rentcar' />
            <Route component={RentCarDetailPage} path='/rentcardetail/:_id' />
            <Route component={DriverInfoPage} path='/driver' />
            <Route component={CourseMainPage} path='/course' />
            <Route component={NotFoundPage} />
          </Switch>
        </ConnectedRouter>
        <GlobalStyles />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
