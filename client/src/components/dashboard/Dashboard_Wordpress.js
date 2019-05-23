import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from './DashboardActions';
import Spinner from '../layout/Spinner';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
    const res = getCurrentProfile();
    console.log('profile= '.res);
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <DashboardActions />

      <ul>
        <div>
          {profile.map((id, date) => (
            <li key={date}>
              <p className='lead'>{id.id}</p>
              <p className='lead'>{id.acf.publisher}</p>
            </li>
          ))}
        </div>
      </ul>
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
