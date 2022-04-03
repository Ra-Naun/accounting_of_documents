import Default from '../components/Layout/Default';
import '../style/index.scss';
import { wrapper } from "../redux/store";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps, router: { route } }) => {
  const withoutLayout = ['/login', '/register'];
  return (
    withoutLayout.includes(route)
    ?  <div>
    <ToastContainer position='bottom-right' />
    <Component {...pageProps} />
    </div>
        
    : <Default>
          <ToastContainer position='bottom-right' />
          <Component {...pageProps} />
      </Default>
  );
}

export default wrapper.withRedux(MyApp)
