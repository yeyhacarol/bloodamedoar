export const getTimeSlots = (startTime, endTime) => {
  let initHour, initMinute;
  startTime = startTime.split(" ");
  startTime = startTime[0].split(":");

  initHour = parseInt(startTime[0]);
  initMinute = parseInt(startTime[1]);

  let init = new Date();
  init.setHours(initHour);
  init.setMinutes(initMinute);
  let totalInitMinutes = init.getHours() * 60 + init.getMinutes();

  let endHour, endMinutes;
  endTime = endTime.split(" ");
  endTime = endTime[0].split(":");

  endHour = parseInt(endTime[0]);
  endMinutes = parseInt(endTime[1]);

  let end = new Date();
  end.setHours(endHour);
  end.setMinutes(endMinutes);
  let totalEndMinutes = end.getHours() * 60 + end.getMinutes();

  let selectableHours = [];

  while (totalInitMinutes <= totalEndMinutes) {
    const minutes = totalInitMinutes % 60;
    const hours = Math.floor(totalInitMinutes / 60);
    selectableHours.push(`${padTo2Digits(hours)}:${padTo2Digits(minutes)}`);

    var date = new Date();
    date.setHours(totalInitMinutes / 60);
    totalInitMinutes = totalInitMinutes + 40;
  }

  return selectableHours;
};

const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};
