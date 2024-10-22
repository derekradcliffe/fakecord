import '../styles/SideBarIcon.css';

const SideBarIcon = ({icon, tooltip, active}) => {
    return (
      active === "true" ?
        <div className="SideBarIcon active" >
          {icon}

          <span class="sidebar-tooltip">{tooltip}</span>
        </div>
      :
      <div className="SideBarIcon" >
        {icon}

        <span class="sidebar-tooltip">{tooltip}</span>
      </div>
    );
  }
  
  export default SideBarIcon;
  