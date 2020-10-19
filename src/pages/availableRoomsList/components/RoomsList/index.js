import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import useStyles from "../../indexCss";

const RoomsList = (props) => {
  const classes = useStyles();
  const {
    selectedRoom,
    onMeetingRoomSelected,
    availableRooms,
    selectedBuilding,
  } = props;
  return (
    <RadioGroup
      name="ccc"
      value={selectedRoom}
      onChange={onMeetingRoomSelected}
      className={classes.roomList}
    >
      {availableRooms
        ? availableRooms.map((room) => (
            <label className={classes.roomRow} key={room.id}>
              <div>
                <Radio value={room.id} />
                {room.name}
              </div>
              <span
                className={classes.buildingName}
              >{`${selectedBuilding}, Floor ${room.floor}`}</span>
            </label>
          ))
        : null}
    </RadioGroup>
  );
};

export default RoomsList;
