var app = new Vue({
  el: "#app",
  data: {
    message: "Hey there lucky fellow!",
    answer: Math.floor(Math.random() * 100) + 1,
    userGuess: "",
    endGameResponse: " ",
    winnerImage: "https://media.giphy.com/media/ZcUGu59vhBGgbBhh0n/giphy.gif",
    showWin: false,
    showLose: false,
    },
  methods: {
    guessCheck: function() {
      if (this.userGuess < this.answer) {
        this.endGameResponse = "Too low!";
        this.showLose: true;
      } else if (this.userGuess > this.answer) {
        this.endGameResponse = "Too high!";
        this.showLose: true;
      } else {
        this.endGameResponse = "You've won!";
        this.showWin = true;
      }
    },
    playAgain: function() {
      this.endGameResponse = "";
      this.showWin = false;
      this.answer = Math.floor(Math.random() * 100) + 1;
    }
  }
});
