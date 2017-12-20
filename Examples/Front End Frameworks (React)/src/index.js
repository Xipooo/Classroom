class BaseClass {
    constructor() {}

    setTitle(title){
        this.title = title;
    }

    printTitle() {
        console.log(`Title: ${this.title}`);
    }
}

class SubClass extends BaseClass {
    constructor() {
        super();
        this.setTitle("This is the class based SubClass");
    }
}

const s = new SubClass();
s.printTitle();