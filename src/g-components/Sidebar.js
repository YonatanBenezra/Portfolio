import React from "react";
import { connect } from "react-redux";
import { setShowSidebar } from "../state/actions";
import { Link } from "react-router-dom";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { GrClose } from "react-icons/gr";

import { SidebarData } from "./SidebarData";

import "./sidebar.css";

function Sidebar(props) {
  const handleClose = () => {
    props.setShowSidebar(false);
  };

  return (
    <div
      className={
        props.showSidebar ? "row w-100 sidebar active" : "row w-100 sidebar"
      }
    >
      <div className="col-12 d-flex flex-column align-items-end justify-content-start">
        <List className="col-12 d-flex flex-column p-0" disablePadding dense>
          <ListItem>
            <GrClose
              className="close-button"
              onClick={handleClose}
              size={"20px"}
            />
          </ListItem>

          {SidebarData.map(({ title, path, url, ...rest }, index) => (
            <ListItem
              component="a"
              href={url}
              key={index}
              className="sidebar-list-item"
              onClick={handleClose}
              // className="col-12 d-flex justify-content-center p-0"
              button
            >
              <div className="sidebar-list-item-div">
                <ListItemText className="sidebar-list-text">
                  {title}
                </ListItemText>
              </div>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    showSidebar: state.showSidebar,
  };
};

export default connect(mapStateToProps, { setShowSidebar })(Sidebar);
