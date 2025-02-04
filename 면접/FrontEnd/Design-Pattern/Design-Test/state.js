class State {
  play(player) {
    throw new Error("play() 메서드는 구현해야 합니다.");
  }
  pause(player) {
    throw new Error("pause() 메서드는 구현해야 합니다.");
  }
  stop(player) {
    throw new Error("stop() 메서드는 구현해야 합니다.");
  }
}

class PlayingState extends State {
  play(player) {
    console.log("▶ 이미 재생 중입니다.");
  }

  pause(player) {
    console.log("⏸ 음악을 일시 정지합니다.");
    player.setState(new PausedState());
  }

  stop(player) {
    console.log("⏹ 음악을 정지합니다.");
    player.setState(new StoppedState());
  }
}

class PausedState extends State {
  play(player) {
    console.log("▶ 음악을 다시 재생합니다.");
    player.setState(new PlayingState());
  }

  pause(player) {
    console.log("⏸ 이미 일시 정지 상태입니다.");
  }

  stop(player) {
    console.log("⏹ 음악을 정지합니다.");
    player.setState(new StoppedState());
  }
}

class StoppedState extends State {
  play(player) {
    console.log("▶ 음악을 재생합니다.");
    player.setState(new PlayingState());
  }

  pause(player) {
    console.log("⏸ 정지된 상태에서는 일시 정지를 할 수 없습니다.");
  }

  stop(player) {
    console.log("⏹ 이미 정지된 상태입니다.");
  }
}

class AudioPlayer {
  constructor() {
    this.state = new StoppedState();
  }

  setState(state) {
    this.state = state;
  }

  play() {
    this.state.play(this);
  }

  pause() {
    this.state.pause(this);
  }

  stop() {
    this.state.stop(this);
  }
}

const player = new AudioPlayer();

player.play();
// play(this) 호출 => this.state는 StoppedState 클래스의 객체, this는 player 객체
// console.log('음악을 재생합니다.')
// this.player.setState(new PlayingState()) 호출
console.log(player)
// player.pause();
// player.play(); // ▶ 음악을 다시 재생합니다.
// player.stop(); // ⏹ 음악을 정지합니다.
// player.pause(); // ⏸ 정지된 상태에서는 일시 정지를 할 수 없습니다.
