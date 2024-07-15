import Activity from '../../components/activity/Activity';
import BarChartComponent from '../../components/barchart/BarChart';
import CalendarBox from '../../components/CalendarBox/CalendarBox';
import Order from '../../components/order/Order';
import OrdersTable from '../../components/orderTable/OrdersTable';
import Payments from '../../components/payments/Payments';
import PaymentsTable from '../../components/paymentsTable/PaymentsTable';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <div className="box box1" >
        <Order/>
      </div>
      <div className="box box2" >
        <Payments/>
      </div>
      <div className="box box3" >
        <BarChartComponent/>
      </div>
      <div className="box box4" >
        <Activity/>
      </div>
      <div className="box box5" >
        <PaymentsTable/>
      </div>
      <div className="box box6" >
        <OrdersTable/>
      </div>
      <div className="box box7" >
        <CalendarBox/>
      </div>
    </div>
  );
};

export default Home;
