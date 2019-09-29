const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 8;
      case "tuesday":
        return 8;
      case "wednesday":
        return 8;
      case "thursday":
        return 8;
      case "friday":
        return 8;
      case "saturday":
        return 8;
      case "sunday":
        return 8;
    }
  }
  
  const getActualSleepHours = () => {
    var sum = getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
    return sum;
   }
  
  const getIdealSleepHours = () => {
    var idealHours = 6;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours();
    var idealSleepHours = getIdealSleepHours();
    
    if (actualSleepHours === idealSleepHours) {
      console.log(`You're getting the perfect amount of sleep.`);
    } else if (actualSleepHours > idealSleepHours) {
      console.log(`You're getting more sleep than needed. You need ${idealSleepHours - actualSleepHours} less than you're getting.`);
    } else {
      console.log(`You're getting less slep than needed. You need ${idealSleepHours - actualSleepHours} more than you're getting.`);
    }
  }
  
  calculateSleepDebt();