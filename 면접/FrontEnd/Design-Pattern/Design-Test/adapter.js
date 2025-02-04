// 클라이언트가 원하는 인터페이스
class Target {
  request() {
    console.log("Target의 요청");
  }
}

// 기존 시스템
class Adatee {
  specificRequest() {
    console.log("adatee의 구체적인 요청");
  }
}


class Adater extends Target {
    constructor(adaptee){
        super()
        this.adaptee = adaptee
    }

    request(){
        this.adaptee.specificRequest();
    }
}

const adaptee = new Adatee();
const adapter = new Adater(adaptee);

adapter.request()
