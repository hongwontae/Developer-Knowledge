class ChatRoom {
  constructor() {
    this.users = [];
  }

  join(user) {
    this.users.push(user);
  }
  sendMessage(message, sender) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
    chatRoom.join(this);
  }

  sendMessage(message) {
    console.log(`${this.name}가 메시지를 보냄 : ${message}`);
    this.chatRoom.sendMessage(message, this);
  }

  receiveMessage(message) {
    console.log(`${this.name}가 메시지를 받음 : ${message}`);
  }
}

const chatRoom = new ChatRoom();

const userA = new User("A", chatRoom);
// new User를 생성자 함수를 통해 name, chatRoom 그리고 userA 객체가 this.users 배열 중 일부로 들어갑니다.


const userB = new User("B", chatRoom);
// new User를 생성자 함수를 통해 name, chatRoom 그리고 userB 객체가 this.users 배열 중 일부로 들어갑니다.


userA.sendMessage("안녕!"); 
// sendMessage를 호출해서 console.log()를 출력하고 chatRoom의 sendMessage를 호출합니다.
// 이 떄 message와 this인 userA 객체를 보냅니다.
// this.users의 배열에는 [userA, userB]가 존재하고 이 배열을 forEach로 반복합니다.
// if 배열의 user와 userA가 일치하지 않을 경우 userB가 receiveMessage(message) 메서드를 호출합니다.
// 그리고 받았다는 console.log()를 호출합니다.


userB.sendMessage("반가워!");