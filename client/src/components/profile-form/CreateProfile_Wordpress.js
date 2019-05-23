import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    formData: ''
    // formData: {
    //   fields: {
    //     publisher: ''
    //   }
    // }
  });

  const { publisher, image1 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // console.log(formData);
    createProfile(formData, history);
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Pieces'
            name='publisher'
            value={publisher}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='image1'
            name='image1'
            value={image1}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' className='btn btn-primary my-1' />
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  // prfr
  createProfile: PropTypes.func.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
