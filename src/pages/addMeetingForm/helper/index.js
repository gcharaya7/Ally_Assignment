import { isSameDate } from "../../../utils/CommonUtils";

export const getAvaiableRooms = (meetingData, buildings) => {
  const { selectedDate, startTime, endTime, building } = meetingData || {};
  const buildingData = buildings.find((item) => {
    return item.name === building;
  });
  const meetingRooms = buildingData.meetingRooms || [];
  meetingRooms.filter((room) => {
    const meetings = room.meetings || [];
    const applicableMeetings = meetings.filter((meeting) => {
      const [year, month, date] = selectedDate;
      const dateString = `${date}/${month}/${year}`;
      return isSameDate(new Date(dateString), new Date(meeting.date));
    });
    applicableMeetings.push({
      startTime,
      endTime,
      title: "Dummy event", // dummy title
      date: null, // dummy date
    });
    // sort meeting rooms on basis of start time
    const sortedMeetings = applicableMeetings.sort((m1, m2) => {
      const [m1Hours, m1Minutes] = m1.split(":");
      const [m2Hours, m2Minutes] = m2.split(":");
      if (parseInt(m1Hours, 10) === parseInt(m2Hours, 10)) {
        return parseInt(m1Minutes, 10) < parseInt(m2Minutes, 10);
      }
      return m1Hours < m2Hours;
    });

    // Find overlaps and return false if found.
    for (var i = 0; i < sortedMeetings.length - 1; i++) {
      const currentEndTime = parseInt(
        sortedMeetings[i].endTime.split(":").join(),
        10
      );
      const nextStartTime = parseInt(
        sortedMeetings[i + 1].startTime.split(":").join(),
        10
      );
      if (currentEndTime > nextStartTime) {
        return false;
      }
    }
    return true;
  });

  return meetingRooms;
};
