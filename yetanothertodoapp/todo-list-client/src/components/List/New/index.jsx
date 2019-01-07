import React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import ListForm from '../form';
import { CREATE_NEW_LIST } from '../mutations';

const NewList = (props) => {
  return(
    <Mutation mutation={CREATE_NEW_LIST}>
      {(createNewList) => {
        const onSubmit = values => {
          createNewList({ variables: values }).then(() => {
            props.history.push('/lists');
          });
        }

        return(<ListForm handleSubmit={onSubmit} name='' />);
      }}
    </Mutation>
  );
}

export default withRouter(NewList);
