import React from "react";
import "./sidebar.css";
import { LineStyle, Timeline, AccessTime } from "@material-ui/icons";

export default function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					{/* <h3 className="sidebarTitle">Dashboard</h3> */}
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyle className="sidebarIcon" />
							Home
						</li>
						<li className="sidebarListItem">
							<Timeline className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<AccessTime className="sidebarIcon" />
							History
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
