import React from 'react';
import { Mutation } from 'react-apollo';

import ListForm from '../form';
import { CREATE_NEW_LIST } from '../mutations';

const NewList = (props) => {
  return(
    <Mutation mutation={CREATE_NEW_LIST}>
      {(createNewList) => {
        const onSubmit = async values => {
          createNewList({ variables: values })
        }

        return(<ListForm onSubmit={onSubmit} />);
      }}
    </Mutation>
  );
}

export default NewList;
