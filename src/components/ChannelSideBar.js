import ChannelTab from './ChannelTab';
import '../styles/ChannelSideBar.css';

const ChannelSideBar = () => {
  return (
    <div className='channelSideBarWrapper'>
      <div className="channelSideBar">
        <ChannelTab />
      </div>
    </div>
  );
}

export default ChannelSideBar;
