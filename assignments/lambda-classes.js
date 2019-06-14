// CODE here for your Lambda Classes

class Person {
    constructor(personStats) {
        this.name = personStats.first_name;
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

    evaluate(student) {
        let score = Math.floor(Math.random() * (10 - -10 + 1) ) + -10;
        let newGrade = student.grade + score;
        console.log(`${student.name}'s old grade: ${student.grade}`)
        console.log(`${student.name}'s new grade: ${newGrade}`)

        if (newGrade > student.grade) {
            console.log(`${this.name} evaluates ${student.name}'s work and adds ${newGrade - student.grade} points to their score.`);
            return student.grade = newGrade;

        } else if (newGrade < student.grade) {
            console.log(`${this.name} evaluates ${student.name}'s work and deducts ${student.grade - newGrade} points from their score.`);
            return student.grade = newGrade;
        } else {
            console.log(`${this.name} evaluates ${student.name}'s work and thinks the existing grade is sufficient.`);
            return student.grade = newGrade;
        };
        
    }
};


class Student extends Person {
    constructor(studentStats) {
        super(studentStats);
        this.previousBackground = studentStats.previousBackground;
        this.className = studentStats.className;
        this.favSubjects = studentStats.favSubjects;
        this.grade = Math.floor(Math.random() * 101 + 10); // this allows for grades over 100% to account for extra credit
    }

    listsSubjects() {
        console.log(`${this.name}'s favorite subjects are ${this.favSubjects[0]}, ${this.favSubjects[1]}, and ${this.favSubjects[2]}.`)
    }

    prAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun the Sprint Challenge on ${subject}.`);
    }

    graduate() {
        if (this.grade >= 70) {
            return console.log(`${this.name} has passed the course and graduated with a grade of ${this.grade}%!`)
        } else {
            return console.log (`With a grade of ${this.grade}%, ${this.name} did not pass the course and needs remedial classes.`)
        }
    }
}


class ProjectManager extends Instructor {
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

// Instructor variables

const rakel = new Instructor({
    "id": 1,
    "first_name": "Rakel",
    "last_name": "Millwall",
    "location": "Danzi",
    "age": 78,
    "favLanguage": "CSS",
    "specialty": "quam sollicitudin vitae",
    "catchphrase": "Aenean auctor gravida sem."
});

const chadwick = new Instructor({
    "id": 2,
    "first_name": "Chadwick",
    "last_name": "Limer",
    "location": "Safonovo",
    "age": 60,
    "favLanguage": "Java",
    "specialty": "at",
    "catchphrase": "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante."
});

const abbe = new Instructor({
    "id": 3,
    "first_name": "Abbe",
    "last_name": "Muldoon",
    "location": "San Agustin",
    "age": 26,
    "favLanguage": "C#",
    "specialty": "in faucibus orci",
    "catchphrase": "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus."
});


// Student variables

const garold = new Student({
    "id": 1,
    "first_name": "Garold",
    "last_name": "Korf",
    "location": "Bailadores",
    "age": 84,
    "previousBackground": "Assistant Media Planner",
    "className": "ART 216",
    "favSubjects": ['Html', 'CSS', 'JavaScript']
});

const june = new Student({
    "id": 2,
    "first_name": "June",
    "last_name": "Vampouille",
    "location": "Luleå",
    "age": 67,
    "previousBackground": "Marketing Manager",
    "className": "HIST 324",
    "favSubjects": ['Labs', 'FlexBox', 'JavaScript']
});

const rosalia = new Student({
    "id": 3,
    "first_name": "Rosalia",
    "last_name": "Woollett",
    "location": "Nangewer",
    "age": 58,
    "previousBackground": "Occupational Therapist",
    "className": "CS 103",
    "favSubjects": ['Node', 'FlexBox', 'React']
})


// PM variables

const brooke = new ProjectManager ({
    "id": 1,
    "first_name": "Brooke",
    "last_name": "Kochl",
    "location": "Älmhult",
    "age": 20,
    "gradClassName": "WEB 18",
    "favInstructor": "Annabelle"
})

const kris = new ProjectManager ({
    "id": 2,
    "first_name": "Kris",
    "last_name": "Riddoch",
    "location": "Kislyakovskaya",
    "age": 41,
    "gradClassName": "WEB 6",
    "favInstructor": "Alix"
  })

const ashel = new ProjectManager ({
    "id": 3,
    "first_name": "Ashel",
    "last_name": "Gull",
    "location": "Bogovarovo",
    "age": 87,
    "gradClassName": "WEB 4",
    "favInstructor": "Keelby"
  })


// Instructor tests
console.log(`

---- INSTRUCTOR TESTS ----
`)
console.log(rakel);
console.log(abbe.grade(garold, "math"));
console.log(chadwick.demo("Calculus II"));
console.log(rakel.evaluate(june));



// Student tests
console.log(`

---- STUDENT TESTS ----
`)
console.log(garold);
console.log(june.listsSubjects());
console.log(garold.prAssignment("Javascript IV"));
console.log(rosalia.sprintChallenge("Underwater Basket Weaving"));

// PM tests
console.log(`

---- PM TESTS ----
`)
console.log(brooke);
console.log(kris.standUp(`#web21`));
console.log(ashel.debugsCode(rosalia, "Underwater Basket Weaving"));
console.log(kris.grade(june, "React"));
console.log(brooke.demo("Node.js"));

// testing the evaluate and graduate functions together
console.log(`

---- .evaluate() + .graduate() TESTS ----
`)
console.log(ashel.evaluate(garold));
console.log("garold.grade property value: ", garold.grade);
console.log(garold.graduate());

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

const students = [{
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
    "first_name": "Ashel",
    "last_name": "Gull",
    "location": "Bogovarovo",
    "age": 87,
    "gradClassName": "WEB 4",
    "favInstructor": "Keelby"
  }]
