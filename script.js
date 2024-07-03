function calculateProtein() {
    const weight = document.getElementById('weight').value;
    const age = document.getElementById('age').value;
    const activity = document.getElementById('activity').value;
    const goal = document.getElementById('goal').value;
    const meals = document.getElementById('meals').value;

    let proteinPerKg;

    if (goal === 'gain') {
        proteinPerKg = 1.8;
    } else if (goal === 'maintain') {
        proteinPerKg = 1.2;
    } else {
        proteinPerKg = 1.0;
    }

    const dailyProtein = weight * proteinPerKg;
    const proteinPerMeal = dailyProtein / meals;
    const hoursBetweenMeals = 24 / meals;

    let recommendedHours = '';
    if (meals == 3) {
        recommendedHours = 'ประมาณ 4-6 ชั่วโมงระหว่างมื้อ';
    } else if (meals == 4) {
        recommendedHours = 'ประมาณ 4 ชั่วโมงระหว่างมื้อ';
    } else if (meals == 5) {
        recommendedHours = 'ประมาณ 3-4 ชั่วโมงระหว่างมื้อ';
    } else {
        recommendedHours = 'ประมาณ 3 ชั่วโมงระหว่างมื้อ';
    }

    document.getElementById('result').innerHTML = `
        โปรตีนที่ต้องการต่อวัน: ${dailyProtein.toFixed(2)} กรัม<br>
        โปรตีนต่อมื้อ: ${proteinPerMeal.toFixed(2)} กรัม<br>
        จำนวนมื้ออาหารต่อวัน: ${meals} มื้อ<br>
        ระยะห่างแต่ละมื้อ: ${recommendedHours}
    `;
}
