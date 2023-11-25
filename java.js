function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0, 0); // Next year's January 1st

    const timeDifference = newYear - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdow').innerHTML = `${days} ${hours} ${minutes} ${seconds}`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to display the countdown immediately