document.addEventListener('DOMContentLoaded', () => {
    const genderSelect = document.getElementById('Gender');
    const ageSelect = document.getElementById('Age');
    const animals = document.querySelectorAll('.animals li');

    const filterAnimals = () => {
        const selectedGender = genderSelect.value;
        const selectedAge = ageSelect.value;

        animals.forEach(animal => {
            const [animalGender, animalAge] = animal.id.split(' ');

            if ((selectedGender === 'none' || selectedGender === animalGender) &&
                (selectedAge === 'none' || selectedAge === animalAge)) {
                animal.style.display = 'block';
            } else {
                animal.style.display = 'none';
            }
        });
    };

    genderSelect.addEventListener('change', filterAnimals);
    ageSelect.addEventListener('change', filterAnimals);
});




