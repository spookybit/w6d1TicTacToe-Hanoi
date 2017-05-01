class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", (e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;
    this.game.playMove(pos);
    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");

      let winner = this.game.winner();
      let $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`${winner} wins`);

      } else {
        $figcaption.html("It's a draw");
      }
      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    let $ul = $('<ul>');
    $ul.addClass("group");

    for (var row = 0; row < 3; row++) {
      for (var col = 0; col < 3; col++) {
        let $li = $('<li>');
        $li.data("pos", [row, col]);
        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }

}

module.exports = View;
