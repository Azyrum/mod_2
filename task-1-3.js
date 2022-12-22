let persons = ["Иван","Петя","Олег"];
persons[0] += " Петров";
persons[1] += " Сидоров";
persons[2] += " Иванов";
console.log(persons);
persons.shift();
persons.push("Иван Петров");
persons.push("Дима Тихонов");
console.log(persons);
persons.unshift(persons.pop());
console.log(persons);

