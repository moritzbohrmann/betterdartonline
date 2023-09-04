const calcTimeUntilNow = (timestamp) => {
   const now = Date.now();

   const dif = new Date(new Date(timestamp).getTime() - now).getTime();

   const minutes = dif / 60000;

   const _days = minutes / 60 / 24;
   const _hours = (_days % Math.floor(_days)) * 24;
   const _minutes = (_hours % Math.floor(_hours)) * 60;

   return {
      toArray: () => {
         return [_days, _hours, _minutes];
      },
      toString: () => {
         return `${Math.floor(_days)}d ${_hours.toFixed(0)}h ${_minutes.toFixed(0)}m`;
      },
   };
};

export { calcTimeUntilNow };
