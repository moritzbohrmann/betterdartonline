import $ from "jquery";

export const resetTable = () => {
   for (let i = 0; i <= 30; i++) {
      $(`#hi${i}`).val(null);
      $(`#hl${i}`).text(null).removeClass("bg-green-400");
      $(`#gi${i}`).val(null);
      $(`#gl${i}`).text(null).removeClass("bg-green-400");
   }
};
export const fillTable = (score, profile) => {
   const prefix = score.player.id === profile.id ? "h" : "g";

   $(`#${prefix}i${score.round}`).val(score.value);
   $(`#${prefix}l${score.round}`)
      .text(score.left)
      .addClass(`${score.left <= 170 && ([159, 162, 163, 165, 166, 168, 169].includes(score.left) ? "bg-red-400" : "bg-green-400")}`);
};
export const toggleInputAvailability = (round) => {
   $(`#hi${round}`).prop("readOnly")
      ? $(`#hi${round}`).addClass("bg-yellow-500").attr("readOnly", false).focus()
      : $(`#hi${round}`).removeClass("bg-yellow-500").attr("readOnly", true);
};
export const matchAverageOf = (match, currentLeg, player) => {
   const currentFilteredScores = currentLeg.scores.filter((s) => s.player.id === player.id);

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

   return (allScores / rounds).toFixed(1).toString().replace(".", ",");
};
export const legAverageOf = (currentLeg, player) => {
   const filteredList = currentLeg.scores.filter((s) => s.player.id === player.id);

   if (filteredList.length > 0) return filteredList.at(-1).avg;
   else return 0;
};
export const initialsOf = (playername) => {
   let initials = "";

   playername.split(" ").forEach((s) => (initials += s.charAt(0)));

   return initials;
};
export const isPlayer = (id) => id === JSON.parse(localStorage.getItem("profile")).id;
