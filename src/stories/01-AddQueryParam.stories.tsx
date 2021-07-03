import AddQueryParamButton from '../Components/AddQueryParamButton';
import { Provider } from 'react-redux';
import store from '../redux/store';

export default {
   title: 'Add Query Params Button',
   component: AddQueryParamButton,
};

export const AddQueryParamButtonStory = () => (
   <Provider store={store}>
      <AddQueryParamButton
         id={0}
         setId={() => {}}
         handleSetQueryParamsValue={() => {}}
         handleSetQueryParamsKey={() => {}}
      />
   </Provider>
);
