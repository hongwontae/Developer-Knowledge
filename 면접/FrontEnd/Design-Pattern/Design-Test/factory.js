// 객체 생성 로직을 캡슐화하고 다형성을 사용해야 할 떄 사용합니다.

class User{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    describe(){
        console.log(this.age, this.name)
    }
}

function createUser(name, age){
    return new User(name, age)
};

const user1 = createUser('hwt', 28);

user1.describe()
