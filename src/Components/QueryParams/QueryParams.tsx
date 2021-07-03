import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setQueryParamsValue } from '../../redux/actions/setQueryParamsValue';
import { setQueryParamsKey } from '../../redux/actions/setQueryParamsKey';
import { setQueryParamsId } from '../../redux/actions/setQueryParamsId';
import { deleteParamPair } from '../../redux/actions/deleteParamPair';
import AddQueryParamButton from '../AddQueryParamButton/AddQueryParamButton';
import './QueryParams';
import content from '../../content.json';
import { useState } from 'react';
import InputField from '../InputField/InputField';
import { TextField, Typography } from '@material-ui/core';

function QueryParams(props: any) {
   const { setQueryParamsKey, setQueryParamsValue } = props;

   const [id, setId] = useState(0);
   const [formData, setFormData] = useState<{
      value: string;
      keyValue: string;
   }>({ value: '', keyValue: '' });

   const handleSetQueryParamsKey = (e: any) => {
      setQueryParamsKey(formData);
   };

   const handleSetQueryParamsValue = (e: any) => {
      setQueryParamsValue(formData);
   };

   const handleKeyChange = (e: any) => {
      setFormData(() => ({ ...formData, [e.target.name]: e.target.value }));
   };

   const { queryParams } = content;
   const { header } = queryParams;

   return (
      <div style={{ margin: '1rem' }} className="container">
         <Typography style={{ margin: '1rem' }} variant={'h4'}>
            {header}
         </Typography>
         <div className="container">
            <TextField
               style={{ width: '300px', margin: '1rem' }}
               onChange={handleKeyChange}
               type="text"
               placeholder="new key"
               name="keyValue"
            />
            <TextField
               style={{ width: '300px', margin: '1rem' }}
               onChange={handleKeyChange}
               type="text"
               placeholder="new value"
               name="value"
            />
            <AddQueryParamButton
               id={id}
               setId={setId}
               handleSetQueryParamsKey={handleSetQueryParamsKey}
               handleSetQueryParamsValue={handleSetQueryParamsValue}
            />
         </div>
         <div>
            {props.total.map(
               ({
                  id,
                  keyValue,
                  value,
               }: {
                  id: number;
                  keyValue: string;
                  value: string;
               }) => {
                  return (
                     <InputField
                        id={id}
                        key={id}
                        keyValue={keyValue}
                        valueValue={value}
                        setQueryParamsId={setQueryParamsId}
                     />
                  );
               }
            )}
         </div>
      </div>
   );
}

const mapStateToProps = (state: any) => {
   return {
      total: state.queryParamReducer.total,
   };
};

const mapDispatchToProps = (dispatch: any) => {
   return bindActionCreators(
      {
         setQueryParamsValue,
         setQueryParamsKey,
         setQueryParamsId,
         deleteParamPair,
      },
      dispatch
   );
};

export default connect(mapStateToProps, mapDispatchToProps)(QueryParams);
