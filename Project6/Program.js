// Task 1: Code a Person class
class Person {
    name = "Tom";
    age = 20;
    energy = 100;

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
    
    constructor(name, age, energy) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    xp = 0;
    hourlyWage = 10;

    goToWork() {
        this.xp += 10;
    }

    constructor(name, age, energy, xp, hourlyWage) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

}

// Task 3: Code an intern object, run methods
function intern() {

    intern = new Worker("Bob", 21, 110, 0, 10);
    intern.goToWork;
    return intern;

}

// Task 4: Code a manager object, methods
function manager() {

    manager = new Worker("Alice", 30, 120, 100, 30);
    manager.doSomethingFun;
    return manager;
    
}
