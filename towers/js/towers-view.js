class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.$fromTowerIdx = null;
    this.setupTowers();
    this.render();
  }


  clickTower() {

  }

  setupTowers() {
    this.$el.empty();
    this.$el.addClass("group");

    let $tower, $disk;

    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
      $tower = $("<ul>");

      for (let diskIdx = 0; diskIdx < 3; diskIdx++) {
        $disk = $("<li>");
        $tower.append($disk);
      }
      this.$el.append($tower);
    }
  }

  render() {
    let $towers = this.$el.find("ul");
    $towers.removeClass();

    this.game.towers.forEach( (disks, towerIdx) => {
      const $disks = $towers.eq(towerIdx).children();
      $disks.removeClass();

      disks.forEach( (diskWidth, diskIdx) => {
        $disks.eq(diskIdx).addClass(`disk-${diskWidth}`);
      });
    });
  }

}


module.exports = View;
