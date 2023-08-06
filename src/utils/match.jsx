export const matchAverageOf = (match, currentLeg, player) => {
   const currentFilteredScores = currentLeg.scores.filter((s) => isPlayer(s.player, player));

   let rounds = currentFilteredScores.length > 0 ? currentFilteredScores.at(-1).round + 1 : 0;
   let allScores = rounds > 0 ? parseFloat(currentFilteredScores.at(-1).avg) * rounds : 0;

   if (rounds === 0 && match.legs.length <= 1) return 0;

   match.legs.forEach((leg) => {
      const lastScore = leg.scores.filter((s) => s.player.id === player.id).at(-1);

      if (lastScore) {
         allScores += (lastScore.round + 1) * parseFloat(lastScore.avg);
         rounds += lastScore.round + 1;
      }
   });

   return parseFloat(allScores / rounds).toFixed(1);
};
export const legAverageOf = (currentLeg, player) => {
   const filteredList = currentLeg.scores.filter((s) => isPlayer(s.player, player));

   if (filteredList.length > 0) return parseFloat(filteredList.at(-1).avg).toFixed(1);
   else return 0;
};
export const initialsOf = (playername) => {
   let initials = "";

   playername.split(" ").forEach((s) => (initials += s.charAt(0)));

   return initials;
};

export const isPlayer = (player, playerToCheck) => player.id === playerToCheck.id;
