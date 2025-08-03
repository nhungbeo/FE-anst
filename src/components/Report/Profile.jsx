import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useRef, useState } from 'react';
import { getTask } from '../../features/data/TaskSlice';
import ApexChart from './ApexChart';
import AIcom from './AIcom';
import ShowImageStudy from './ShowImageStudy';
import { getUserAPI } from '../../features/user/userSlice';
import ModalSignIn from '../Auth/ModalSignIn';
import { PREFIX } from '../../util/fetchData';
import ModalSignUp from '../Auth/ModalSignUp';
import { 
  AiOutlineCamera, 
  AiOutlineEdit, 
  AiOutlineMail, 
  AiOutlineUser,
  AiOutlineCalendar,
  AiOutlineTrophy,
  AiOutlineBarChart,
  AiOutlineClockCircle
} from 'react-icons/ai';
import { 
  FiUser, 
  FiMail, 
  FiCalendar, 
  FiEdit3, 
  FiCamera,
  FiSettings,
  FiAward,
  FiTarget,
  FiTrendingUp
} from 'react-icons/fi';
import ShowModal from '../Study/ShowModal';
import UploadStudyImage from '../User/UploadStudyImage';
import UploadAvatar from '../User/UploadAvatar';
import Loading from '../Loading';

function Profile() {
  const dispatch = useDispatch();
  const taskState = useSelector((state) => state.task);
  const userState = useSelector((state) => state.user);
  const STORE = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUserAPI());
    dispatch(getTask());
  }, []);

  // Modern Stats Cards
  const StatsCards = () => {
    const totalTasks = taskState.tasks?.length || 0;
    const completedTasks = taskState.tasks?.filter(task => task.completed)?.length || 0;
    const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
    
    return (
      <div className='stats-grid'>
        <div className='stat-card'>
          <div className='stat-icon'>
            <FiTarget />
          </div>
          <div className='stat-content'>
            <h3>{totalTasks}</h3>
            <p>Total Tasks</p>
          </div>
        </div>
        
        <div className='stat-card'>
          <div className='stat-icon completed'>
            <FiAward />
          </div>
          <div className='stat-content'>
            <h3>{completedTasks}</h3>
            <p>Completed</p>
          </div>
        </div>
        
        <div className='stat-card'>
          <div className='stat-icon rate'>
            <FiTrendingUp />
          </div>
          <div className='stat-content'>
            <h3>{completionRate}%</h3>
            <p>Success Rate</p>
          </div>
        </div>
        
        <div className='stat-card'>
          <div className='stat-icon time'>
            <AiOutlineClockCircle />
          </div>
          <div className='stat-content'>
            <h3>{Math.floor(totalTasks * 25 / 60)}h</h3>
            <p>Study Time</p>
          </div>
        </div>
      </div>
    );
  };

  // Show chart for day
  const Day = () => {
    return (
      <div className='modern-dashboard'>
        <StatsCards />
        <div className='dashboard-content'>
          <div className='chart-section'>
            <div className='section-header'>
              <h3><AiOutlineBarChart /> Performance Analytics</h3>
            </div>
            <div className='chart-container'>
              <ApexChart chartData={taskState} />
            </div>
          </div>
          <div className='ai-section'>
            <div className='section-header'>
              <h3><AiOutlineTrophy /> AI Insights</h3>
            </div>
            <div className='ai-container'>
              <AIcom chartData={taskState} />
            </div>
          </div>
        </div>
      </div>
    );
  };
  //show login require
  const UserInfor = () => {
    return (
      <div className='guest-welcome'>
        <div className='guest-avatar'>
          <div className='avatar-placeholder'>
            <FiUser />
          </div>
        </div>
        <div className='guest-content'>
          <h2>🐝 Welcome, Future Bee!</h2>
          <p>Join our productive community and start tracking your study progress</p>
          <div className='guest-features'>
            <div className='feature-item'>
              <FiTarget />
              <span>Track Study Sessions</span>
            </div>
            <div className='feature-item'>
              <FiAward />
              <span>Earn Achievements</span>
            </div>
            <div className='feature-item'>
              <FiTrendingUp />
              <span>View Analytics</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Show avatar user and info
  const AvatarUser = () => {
    return (
      <div className='modern-user-card'>
        <div className='user-avatar-section'>
          <div className='avatar-container'>
            <div className='avatar-image'>
              {!STORE.user.users.avatar.includes('http', 0) ? (
                <img
                  src={PREFIX + '/' + STORE.user.users.avatar}
                  alt='User Avatar'
                />
              ) : (
                <img
                  src={STORE.user.users.avatar}
                  alt='User Avatar'
                />
              )}
            </div>
            <div className='avatar-overlay'>
              <button className='camera-btn' title='Change Avatar'>
                <FiCamera />
              </button>
            </div>
          </div>
          
          <div className='avatar-actions'>
            <ShowModal
              youtube={false}
              image={false}
              avatar={true}
            />
            <UploadAvatar/>
          </div>
        </div>

        <div className='user-info-section'>
          <div className='user-header'>
            <h2>{STORE.user.users.fullname || 'Busy Bee'}</h2>
            <button className='edit-profile-btn' title='Edit Profile'>
              <FiEdit3 />
            </button>
          </div>
          
          <div className='user-details'>
            <div className='detail-item'>
              <FiMail />
              <span>{STORE.user.users.email}</span>
            </div>
            <div className='detail-item'>
              <FiCalendar />
              <span>Member since {new Date().getFullYear()}</span>
            </div>
          </div>
          
          <div className='user-badges'>
            <div className='badge'>
              <FiAward />
              <span>Study Master</span>
            </div>
            <div className='badge'>
              <FiTarget />
              <span>Goal Achiever</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='modern-profile'>
      {/* Loading States */}
      {STORE.user.isLoggin && STORE.user.getUserAPI.isLoading && (
        <div className='loading-container'>
          <Loading/>
        </div>
      )}
      
      {STORE.user.isLoggin && STORE.user.getUserAPI.isErr && (
        <div className='error-container'>
          <h2>⚠️ Something went wrong</h2>
          <p>Please try refreshing the page</p>
        </div>
      )}
      
      {STORE.user.isLoggin && STORE.user.getUserAPI.isSusses ? (
        // Logged in user profile
        <div className='authenticated-profile'>
          {/* Cover Image Section */}
          <div className='cover-section'>
            <div className='cover-image'>
              {!STORE.user.getUserAPI.isLoading && <ShowImageStudy />}
            </div>
            <div className='cover-overlay'></div>
          </div>
          
          {/* User Profile Card */}
          <div className='profile-section'>
            <div className='profile-container'>
              <AvatarUser />
            </div>
          </div>
          
          {/* Dashboard Section */}
          <div className='dashboard-section'>
            <div className='dashboard-container'>
              <Day />
            </div>
          </div>
        </div>
      ) : (
        // Guest user welcome
        <div className='guest-profile'>
          {/* Guest Cover Section */}
          <div className='guest-cover-section'>
            <div className='guest-cover-image'>
              {!STORE.user.image.includes('http', 0) ? (
                <img
                  src={PREFIX + '/' + STORE.user.image}
                  alt='Study Background'
                />
              ) : (
                <img
                  src={STORE.user.image}
                  alt='Study Background'
                />
              )}
            </div>
            <div className='guest-cover-overlay'></div>
          </div>

          {/* Guest Welcome Section */}
          <div className='guest-main-section'>
            <div className='guest-container'>
              <UserInfor />
              
              {/* Auth Buttons */}
              <div className='auth-buttons'>
                <div className='auth-btn-container'>
                  <ModalSignIn />
                </div>
                <div className='auth-btn-container'>
                  <ModalSignUp />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
