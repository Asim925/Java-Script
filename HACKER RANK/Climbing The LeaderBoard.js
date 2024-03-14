function climbingLeaderboard(ranked, player) {
  let positions = [];
  for (let i = 0; i < player.length; i++) {
    ranked.push(player[i]);
    ranked.sort((a, b) => b - a);

    // FILTERING THE REPETITIONS
    let rankings = ranked.filter(
      (value, index) => ranked.indexOf(value) === index
    );

    let position = rankings.indexOf(player[i]) + 1;
    positions.push(position);

    ranked.splice(ranked.indexOf(player[i]), 1);
  }

  return positions;
}

let ranked = [100, 90, 90, 80, 75, 60];
let player = [50, 65, 77, 90, 102];
console.log(climbingLeaderboard(ranked, player));
