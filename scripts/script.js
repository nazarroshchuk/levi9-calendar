function createCell(dayNumber, additionalClass = '') {
    const cellClass = additionalClass ? `cell slide-left ${additionalClass}` : 'cell slide-left';
    const modalImageName = dayNumber === 4 || dayNumber === 18 ? `frame-${dayNumber}.png` : `day-${dayNumber}.jpg`;
    const dayContent = dayContentMap[dayNumber];

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
                    <div class="modal-photo-container">
                        <img class="modal-photo" src="assets/images/${modalImageName}" alt="Фото для дня ${dayNumber}" loading="lazy" />
                    </div>
                    <div class="modal-text">
                        <h2>${dayNumber}</h2>
                        <h4>${dayContent.title}</h4>
                        <p>${dayContent.description}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Content object with titles and descriptions for each day
const dayContentMap = {
    1: {
        title: "Together We Begin",
        description: "Every great journey starts with a single step. When we unite our strengths and embrace new challenges, we create the foundation for extraordinary achievements."
    },
    2: {
        title: "Spark of Innovation",
        description: "True innovation emerges when diverse minds collaborate. Let your creativity flow and inspire others to think beyond the ordinary."
    },
    3: {
        title: "Courage to Lead",
        description: "Leadership isn't about being in charge—it's about taking care of those in your charge. Step forward with confidence and compassion."
    },
    4: {
        title: "Bonds That Strengthen",
        description: "The strongest teams are built on trust, understanding, and mutual respect. Celebrate the connections that make us stronger together."
    },
    5: {
        title: "Joy in Progress",
        description: "Find happiness in the journey, not just the destination. Every small victory is worth celebrating when shared with amazing teammates."
    },
    6: {
        title: "Wisdom in Unity",
        description: "When we combine our unique perspectives and experiences, we gain wisdom that no individual could achieve alone."
    },
    7: {
        title: "Dreams Take Flight",
        description: "Dare to dream big and support others in pursuing theirs. Together, we can turn impossible dreams into incredible realities."
    },
    8: {
        title: "Strength in Diversity",
        description: "Our differences are our greatest assets. Embrace varied viewpoints and watch how they transform challenges into opportunities."
    },
    9: {
        title: "Hope Lights the Way",
        description: "Even in uncertain times, hope guides us forward. Be the beacon of positivity that illuminates the path for your team."
    },
    10: {
        title: "Growth Through Challenge",
        description: "Every obstacle is a chance to grow stronger. Face challenges together and emerge more resilient than ever before."
    },
    11: {
        title: "Celebrate Each Victory",
        description: "Success is sweeter when shared. Take time to acknowledge progress and celebrate the wins, both big and small."
    },
    12: {
        title: "Trust Builds Bridges",
        description: "Trust is the bridge between individual talent and collective success. Build it carefully, maintain it consistently."
    },
    13: {
        title: "Passion Fuels Purpose",
        description: "When passion meets purpose, extraordinary things happen. Let your enthusiasm inspire others to find their spark."
    },
    14: {
        title: "Kindness Creates Magic",
        description: "Small acts of kindness create ripples of positivity. Be generous with encouragement and watch your team flourish."
    },
    15: {
        title: "Balance Brings Peace",
        description: "True success includes well-being and joy. Strive for balance and help others find harmony in their journey."
    },
    16: {
        title: "Resilience Reveals Strength",
        description: "Resilience isn't about never falling—it's about how gracefully we rise. Support each other through every setback."
    },
    17: {
        title: "Gratitude Multiplies Joy",
        description: "Appreciation transforms ordinary moments into treasured memories. Express gratitude and watch positivity multiply."
    },
    18: {
        title: "Innovation Through Collaboration",
        description: "The best ideas emerge when brilliant minds work together. Foster an environment where creativity can flourish and grow."
    },
    19: {
        title: "Courage Conquers Fear",
        description: "Courage isn't the absence of fear—it's moving forward despite it. Be brave together and accomplish the impossible."
    },
    20: {
        title: "Legacy of Excellence",
        description: "The work we do today shapes tomorrow's possibilities. Create a legacy of excellence that future teams will be proud to build upon."
    },
    21: {
        title: "Harmony in Diversity",
        description: "Beautiful music comes from different notes played in harmony. Embrace our differences and create something beautiful together."
    },
    22: {
        title: "Momentum of Success",
        description: "Success builds upon success. Keep the momentum going by celebrating progress and supporting each other's growth."
    },
    23: {
        title: "Light in Every Heart",
        description: "Each team member brings unique light to our collective journey. Nurture that light and help it shine even brighter."
    },
    24: {
        title: "Future Full of Promise",
        description: "As we look ahead, we see endless possibilities. Together, we have the power to create a future filled with success, joy, and fulfillment."
    }
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
    calendar.insertAdjacentHTML('beforebegin', createCell(i, additionalClass));
}
