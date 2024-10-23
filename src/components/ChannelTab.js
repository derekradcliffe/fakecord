import { FaAngleDown, FaPlus, FaHashtag } from "react-icons/fa";

const ChannelSideBar = () => {
  return (
    <div className="channelSideBar">
      <TabHeader tabTitle="Testing title" />
      <div className="channelWrapper">
        <TabChannel title="General" />
      </div>
    </div>
  );
};

const TabHeader = ({tabTitle}) => {
    return(
        <div className="tabHeader"><FaAngleDown />{tabTitle}<FaPlus className="plus" /></div>  
    );
};

const TabChannel = ({title}) => { 
    return(
        <div className="tabChannel"><FaHashtag size="1rem" />{title}</div>  
    );
};

export default ChannelSideBar;
