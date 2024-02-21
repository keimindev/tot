export const isToday = (date) =>{

    const months = [
    "January", "Feburary", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    const month = months[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();

  //  const formatDay = `${month} ${day} ${year}`;
    const formatDay = `${month} ${year}`;
    return formatDay;

}