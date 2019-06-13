// CODE here for your Lambda Classes

class Person {
    constructor(personStats) {
        this.name = `${personStats.first_name} ${personStats.lastname}`;
        this.age = personStats.age;
        this.location = personStats.location;
    }

    speak() {
        console.log(`Hello, my name is ${this.name}. I am from ${this.location}.`)
    }
}


class Instructor extends Person {
    constructor(instructorStats) {
        super(instructorStats);
        this.specialty = instructorStats.specialty;
        this.favLanguage = instructorStats.favLanguage;
        this.catchphrase = instructorStats.catchphrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}!`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score in ${subject}!`);
    }
};

class Student extends Person {
    constructor(studentStats) {
        super(studentStats);
        this.previousBackground = studentStats.previousBackground;
        this.className = studentStats.className;
        this.favSubjects = studentStats.favSubjects;
    }

    listsSubjects(subjects) {
        console.log(`${this.name}'s favorite subjects are ${subjects[0]}, ${subjects[1]}, and ${subjects[2]}.`)
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun the Sprint Challenge on ${subject}.`);
    }
}

class ProjectManager extends Person {
    constructor(pmStats) {
        super(pmStats);
        this.gradClassName = pmStats.gradClassName;
        this.favInstructor = pmStats.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }
}









const instructors = [{
    "id": 1,
    "first_name": "Rakel",
    "last_name": "Millwall",
    "location": "Danzi",
    "age": 78,
    "favLanguage": "CSS",
    "specialty": "quam sollicitudin vitae",
    "catchphrase": "Aenean auctor gravida sem."
  }, {
    "id": 2,
    "first_name": "Chadwick",
    "last_name": "Limer",
    "location": "Safonovo",
    "age": 60,
    "favLanguage": "Java",
    "specialty": "at",
    "catchphrase": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
  }, {
    "id": 3,
    "first_name": "Abbe",
    "last_name": "Muldoon",
    "location": "San Agustin",
    "age": 26,
    "favLanguage": "C#",
    "specialty": "in faucibus orci",
    "catchphrase": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
  }]

  let students = [{
    "id": 1,
    "first_name": "Garold",
    "last_name": "Korf",
    "location": "Bailadores",
    "age": 84,
    "previousBackground": "Assistant Media Planner",
    "className": "ART 216",
    "favSubjects": "['Html', 'CSS', 'JavaScript']"
  }, {
    "id": 2,
    "first_name": "June",
    "last_name": "Vampouille",
    "location": "Luleå",
    "age": 67,
    "previousBackground": "Marketing Manager",
    "className": "HIST 324",
    "favSubjects": "['Labs', 'FlexBox', 'JavaScript']"
  }, {
    "id": 3,
    "first_name": "Rosalia",
    "last_name": "Woollett",
    "location": "Nangewer",
    "age": 58,
    "previousBackground": "Occupational Therapist",
    "className": "CS 103",
    "favSubjects": "['Node', 'FlexBox', 'React']"
  }]

  const pms = [{
    "id": 1,
    "first_name": "Brooke",
    "last_name": "Kochl",
    "location": "Älmhult",
    "age": 20,
    "gradClassName": "WEB 18",
    "favInstructor": "Annabelle"
  }, {
    "id": 2,
    "first_name": "Kris",
    "last_name": "Riddoch",
    "location": "Kislyakovskaya",
    "age": 41,
    "gradClassName": "WEB 6",
    "favInstructor": "Alix"
  }, {
    "id": 3,
    "first_name": "Gun",
    "last_name": "Gull",
    "location": "Bogovarovo",
    "age": 87,
    "gradClassName": "WEB 4",
    "favInstructor": "Keelby"
  }]