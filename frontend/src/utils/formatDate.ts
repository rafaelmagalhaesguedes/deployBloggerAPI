/* 
    This function receives a date and returns it in the format "dd/mm/yyyy".
    It uses the toLocaleDateString method to format the date.
*/
export default function formatDate(date: Date) {
  return new Date(date).toLocaleDateString("br-BR", {
    day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
  });
}