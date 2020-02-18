var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    answer: "9",
    userGuess: "",
    endGame: " ",
    winnerImage: "",
    },
  methods: {
    guessCheck: function() {
      if (this.userGuess < this.answer) {
        this.endGame = "Too low!";
      } else if (this.userGuess > this.answer) {
        this.endGame = "Too high!";
      } else {
        this.endGame = "You've won!";
        this.winnerImage = "https://media.giphy.com/media/ZcUGu59vhBGgbBhh0n/giphy.gif";
      }
    },
    playAgain: function() {
      this.endGame = "";
      this.winnerImage = "";
    }
  }
});
