const timer = (id, deadline) => {
    const addZero = (num) => {
        if (num <= 9) {
            return '0'+ num; 
        } else {
            return num;
        }
    };

    function getTimeRemaining (endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor (t/ (1000 * 60 * 60 *24)),
              hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
              minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)),
              seconds = Math.floor((t % (1000 * 60)) / 1000);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock (selector, endtime) {
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval (updateClock, 1000);

    function updateClock() {
        const t = getTimeRemaining (endtime);
        
            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
        
            if (t.total <=0) {
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
        
                clearInterval(timeInterval);        
            }       
        }
    }
    setClock(id, deadline);
};

export default timer;