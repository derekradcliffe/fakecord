import SideBarIcon from './SideBarIcon';
import { FaBattleNet, FaPlus, FaDiscord } from "react-icons/fa";
import '../styles/SideBar.css';

const SideBar = () => {
  return (
    <div className="SideBar">
        <SideBarIcon icon={<FaDiscord size="2rem" color="#23A559" />} tooltip="This is a tooltip" />
        <SideBarIcon icon={<FaBattleNet size="2rem" color="#23A559" />} tooltip="This is a tooltip" />
        <SideBarIcon icon={<FaBattleNet size="2rem" color="#23A559" />} tooltip="This is a tooltip" />
        <SideBarIcon icon={<FaPlus size="2rem" color="#23A559" />} tooltip="Add a Sever" />
    </div>
  );
}

export default SideBar;
