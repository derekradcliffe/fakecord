import SideBarIcon from './SideBarIcon';
import { FaBattleNet, FaPlus, FaDiscord } from "react-icons/fa";
import '../styles/SideBar.css';
import Divider from './Divider';

const SideBar = () => {
  return (
    <div className="SideBar">
        <SideBarIcon icon={<FaDiscord size="2rem" color="#23A559" />} tooltip="This is a tooltip" active="true" />
        <Divider />
        <SideBarIcon icon={<FaBattleNet size="2rem" color="#23A559" />} tooltip="This is a tooltip" active="false" />
        <SideBarIcon icon={<FaBattleNet size="2rem" color="#23A559" />} tooltip="This is a tooltip" active="false" />
        <Divider />
        <SideBarIcon icon={<FaPlus size="2rem" color="#23A559" />} tooltip="Add a Sever" active="false" />
    </div>
  );
}

export default SideBar;
