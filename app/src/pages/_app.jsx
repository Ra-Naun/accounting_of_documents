import { Provider } from 'mobx-react';
import { useStore } from '../store';
import Default from '../components/Layout/Default';
import '../style/index.scss';

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialState);
  return (
    <Default>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Default>
  );
}
