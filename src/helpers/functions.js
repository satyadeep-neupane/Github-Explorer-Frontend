export const parseCustomDate = (dateString) => {
    if (!dateString) return "N/A";
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    // Split the date string into parts
    const [year, month, day] = dateString.split("-");

    // Ensure parts are valid integers
    const parsedYear = parseInt(year);
    const parsedMonth = parseInt(month) - 1; // Month index starts from 0
    const parsedDay = parseInt(day);

    // Ensure all parts are valid
    if (isNaN(parsedYear) || isNaN(parsedMonth) || isNaN(parsedDay)) {
        throw new Error("Invalid date format");
    }

    // Create formatted date string
    const formattedDate = `${parsedDay} ${months[parsedMonth]}, ${parsedYear}`;

    return formattedDate;
};
