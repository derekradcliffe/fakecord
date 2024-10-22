import '../styles/SideBarIcon.css';

const SideBarIcon = ({icon, tooltip}) => {
    return (
      <div className="SideBarIcon">
        {icon}

        <span class="sidebar-tooltip">{tooltip}</span>
      </div>
    );
  }
  
  export default SideBarIcon;
  