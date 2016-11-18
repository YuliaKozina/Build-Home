window.onload = function () {

    var getData = new GetData();
    var data = JSON.parse(getData.get());


    var skills = data.map(function (item) { //выбираем поля skills
        return item.skills;
    });

    skills = _.flattenDeep(skills); // схлопываем массив для поиска повторяющихся элементов
    skills = _.uniq(skills); // ищем уникальные элементы
    skills = skills.sort();
    console.log("sorted skills", skills);


    var friends = data.map(function (item) { //создаем объекты с полями name and friends
        return _.pick(item, 'name', 'friends');
    });

    friends = _.sortBy(friends, function (item) { //сортируем по количеству друзей
        return item.friends.length;
    });

    console.log("sorted friends", friends);



    var allFriends = data.map(function (item) { // берем каждый элемент массива

        return _.map(item.friends, function (key) { // у элемента берем поле friends и из него берем поле name
            return key.name
        });

    });

    allFriends = _.flattenDeep(allFriends); //соединяем все в один массив
    allFriends = _.uniq(allFriends); // сортируем что бы не было повторений

    console.log("all friends", allFriends);

};