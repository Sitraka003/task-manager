/**
  Pauses the execution for a specified amount of time.
  @param {number} milliseconds - The duration to wait in milliseconds.
  @returns {Promise<void>} A Promise that resolves after the specified duration.
*/
const wait = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
};

export { wait };

//calcul la difference en 02 dates, puis la formate
export function timeDifference(date1:Date, date2:Date) {
  // Convertir les dates en millisecondes
  var diff = Math.abs(date1.getTime() - date2.getTime());

  // Calculer les valeurs de temps
  var seconds = Math.floor(diff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);

  // Formater la différence
  var formattedDiff = `${days} jours, ${hours % 24} heures, ${minutes % 60} minutes et ${seconds % 60} secondes`;

  return formattedDiff;
}

var date1 = new Date('2023-06-13T12:00:00');

//formate une date
export function formatDate(date:Date) {
  var day = date.getDate();
  var month = date.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
  var year = date.getFullYear();
  var hours = date.getHours();
  var minutes = date.getMinutes();

  // Ajouter un zéro initial si nécessaire
  const dayF = (day < 10) ? '0' + day : day;
  const monthF = (month < 10) ? '0' + month : month;
  const hoursF = (hours < 10) ? '0' + hours : hours;
  const minutesF = (minutes < 10) ? '0' + minutes : minutes;

  var formattedDate = dayF + ':' + monthF + ':' + year + ' ' + hoursF + ':' + minutesF;
  return formattedDate;
}
