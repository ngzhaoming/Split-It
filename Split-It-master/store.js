import { createStore } from 'redux';
import rootreducer from './src/redux/reducer/rootreducer';

export default configureStore = () => {
    const store = createStore(rootreducer)
    return store;
}