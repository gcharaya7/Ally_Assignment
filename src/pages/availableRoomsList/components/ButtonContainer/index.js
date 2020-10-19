import React from "react";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { BTN_TXTS, API_CALL_STATUS } from "../../../../constants";
import useStyles from "../../indexCss";

const ButtonContainer = (props) => {
  const { meetingSaveStatus, onMeetingSave } = props;
  const classes = useStyles();

  const onCancel = () => {
    props.history.replace("/", {});
  };

  return (
    <div className={classes.btnContainer}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={onCancel}
      >
        {BTN_TXTS.CANCEL}
      </Button>
      <Button variant="contained" color="primary" onClick={onMeetingSave}>
        {meetingSaveStatus === API_CALL_STATUS.INPROGRESS && (
          <>
            <CircularProgress color="#ffffff" size={18} />
            &nbsp;&nbsp;
          </>
        )}
        {BTN_TXTS.ADD_MEETING}
      </Button>
    </div>
  );
};

export default withRouter(ButtonContainer);
