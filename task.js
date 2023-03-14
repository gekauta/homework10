let capitals = { Киев: "Украины",
        Москва: "России",
        Минск: "Беларуси",
    userCity:''                 };
let hobbies = { футбол: 'Месси',
    бокс: 'Кличко',
    плавание: 'Фелпс',
    }
let userHobby;
let userYearBirthday = prompt('Какой Ваш год рождения?', '');
 if (userYearBirthday == +userYearBirthday && userYearBirthday) {
    let userCity = prompt('В каком городе Вы живете?', '');
        if (isNaN(userCity) ) {
            capitals.userCity = userCity;
            let userHobby = prompt('Каким видом спорта занимаешься?', '');
            if (isNaN(userHobby) ) {
                hobbies.userHobby = userHobby;
                // console.log(hobbies[userHobby]);
                // alert(2023-userYearBirthday);
                }
            else {alert("Жаль, что Вы не захотели ввести свой")};
           // else if (capitals[userCity]) {alert( 'kyiv')};

            // alert(2023-userYearBirthday);
            }
        else {alert("Жаль, что Вы не захотели ввести свой родной город")}


        if (userYearBirthday &&  capitals.userCity==='Киев'||'Москва'||'Минск') {
            alert(2023-userYearBirthday + " лет" + '\n' + 'Ты живешь в столице ' +capitals[userCity] + '\n' +'Круто! Хочешь быть похож на ' + hobbies[userHobby]);
        }
        else {
            alert(2023-userYearBirthday + " лет" + '\n' + 'Ты живешь в городе ' + userCity + '\n' +'Крутое! Хобби! ');
        }
    console.log(hobbies);
    //  alert(2023-userYearBirthday);
     console.log(capitals[userCity]);
}
 else {alert("Жаль, что Вы не захотели ввести свои данные")}

// alert(2023-userYearBirthday + '\n' + 'Ты ' capitals[userCity])
