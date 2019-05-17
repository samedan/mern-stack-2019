import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Theme</h1>
      <p className='lead'>{profile[0].id}</p>
      <p className='small'>{profile[0].acf.publisher}</p>
    </Fragment>
  );
};

Dashboard.propTypes = {
  // ptfr
  getCurrentProfile: PropTypes.func.isRequired,
  // ptor
  auth: PropTypes.object.isRequired,
  // ptor
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
