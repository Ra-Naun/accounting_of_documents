import { Provider } from 'mobx-react';
import { useStore } from '../store';
import Default from '../components/Layout/Default';
import '../style/index.scss';

export default function MyApp({ Component, pageProps, router: { route } }) {
  const store = useStore(pageProps.initialState);
  const withoutLayout = ['/login', '/register'];
  return (
    withoutLayout.includes(route)
    ? <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    : <Default>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Default>
  );
}
