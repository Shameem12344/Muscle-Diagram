const muscleData = {
    "chest": {
        name: "Chest (Pectoralis Major)",
        workouts: ["Push-ups", "Bench Press", "Chest Flyes"],
        stretches: ["Doorway Chest Stretch", "Cross-body Arm Stretch"]
    },
    "biceps": {
        name: "Biceps",
        workouts: ["Bicep Curls", "Hammer Curls", "Chin-ups"],
        stretches: ["Behind-the-Back Bicep Stretch", "Wall Bicep Stretch"]
    },
    // Add more muscles here
};

function createMuscleAreas() {
    const map = document.getElementById('muscle-map');
    for (let muscle in muscleData) {
        const area = document.createElement('area');
        area.shape = "poly";
        area.coords = "0,0,100,100,200,200"; // You'll need to define proper coordinates for each muscle
        area.alt = muscleData[muscle].name;
        area.dataset.muscle = muscle;
        map.appendChild(area);
    }
}

function showMuscleInfo(muscle) {
    const infoPanel = document.getElementById('info-panel');
    const muscleName = document.getElementById('muscle-name');
    const workoutsContent = document.getElementById('workouts');
    const stretchesContent = document.getElementById('stretches');

    muscleName.textContent = muscleData[muscle].name;
    workoutsContent.innerHTML = `<ul>${muscleData[muscle].workouts.map(w => `<li>${w}</li>`).join('')}</ul>`;
    stretchesContent.innerHTML = `<ul>${muscleData[muscle].stretches.map(s => `<li>${s}</li>`).join('')}</ul>`;

    infoPanel.classList.remove('hidden');
}

function setupEventListeners() {
    const map = document.getElementById('muscle-map');
    map.addEventListener('mouseover', (e) => {
        if (e.target.tagName === 'AREA') {
            // Show tooltip with muscle name (you'll need to implement this)
        }
    });

    map.addEventListener('click', (e) => {
        if (e.target.tagName === 'AREA') {
            showMuscleInfo(e.target.dataset.muscle);
        }
    });

    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.tab-button.active').classList.remove('active');
            tab.classList.add('active');
            document.querySelector('.tab-content.active').classList.remove('active');
            document.getElementById(tab.dataset.tab).classList.add('active');
        });
    });
}

createMuscleAreas();
setupEventListeners();