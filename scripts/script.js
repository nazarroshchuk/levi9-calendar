function createCell(dayNumber, additionalClass = '', aspectRatio) {
    const cellClass = additionalClass ? `cell slide-left ${additionalClass}` : 'cell slide-left';

    return `
        <div class="${cellClass}">
            <input id="c${dayNumber}" type="checkbox" class="toggle" />
            <input id="c${dayNumber}-modal" type="checkbox" class="modal-toggle" />
            <!-- Icon label (visible when unchecked) -->
            <label for="c${dayNumber}" class="icon-wrap icon-label">
                <img class="icon" src="assets/tiles/day-${dayNumber}.jpg" alt="Day ${dayNumber} icon" width="129" height="129">
            </label>
            <!-- Image label (visible when checked) - opens modal when clicked -->
            <label for="c${dayNumber}-modal" class="photo-wrap photo-label">
                <img class="photo" src="assets/images/day-${dayNumber}.jpg" alt="Фото для дня ${dayNumber}" loading="lazy" />
            </label>
            <!-- Modal -->
            <div class="modal">
              <label for="c${dayNumber}-modal" class="modal-backdrop"></label>
                <div class="modal-content">
                    <label for="c${dayNumber}-modal" class="modal-close">&times;</label>
                    <div class="modal-photo-container ratio-${aspectRatio}">
                        <img class="modal-photo" src="assets/images/day-${dayNumber}.jpg" alt="Фото для дня 1" loading="lazy" />
                    </div>
                    <div class="modal-text">
                        <h2>${dayNumber}</h2>
                        <h4>Event headline</h4>
                        <p>Brief description or quote will go here</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

const aspectRatios = {
    4: '2-1',
    18: '2-1',
    // Define ratios for each day
};

// Generate all 24 cells
const calendar = document.querySelector('.holidays');
const specialClasses = {
    4: 'fourth-cell',
    13: 'thirteen-cell',
    15: 'fifteen-cell',
    18: 'eighteen-cell',
    20: 'twenty-cell',
    21: 'twenty-first-cell',
    22: 'twenty-two-cell',
    23: 'twenty-three-cell',
    24: 'twenty-four-cell'
};

for (let i = 1; i <= 24; i++) {
    const additionalClass = specialClasses[i] || '';
    const aspectRatio = aspectRatios[i] || '1-1';
    calendar.insertAdjacentHTML('beforebegin', createCell(i, additionalClass, aspectRatio));
}

