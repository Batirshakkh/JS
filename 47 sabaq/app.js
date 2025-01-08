 let startButton = document.getElementById('start');
        let pauseButton = document.getElementById('pause');
        let timeDisplay = document.getElementById('time');

        let interval = null;
        let seconds = 0;

        function formatTime(secs) {
            let hrs = Math.floor(secs / 3600);
            let mins = Math.floor((secs % 3600) / 60);
            let secsLeft = secs % 60;

            return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secsLeft.toString().padStart(2, '0')}`;
        }

        startButton.addEventListener('click', () => {
            if (!interval) {
                interval = setInterval(() => {
                    seconds++;
                    timeDisplay.textContent = formatTime(seconds);
                    timeDisplay.style.color = 'green';
                }, 1000);
            }
        });

        pauseButton.addEventListener('click', () => {
            clearInterval(interval);
            interval = null;
            timeDisplay.style.color = 'black';
        });