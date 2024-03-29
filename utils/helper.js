function formatDate(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}
    /${new date
        (date).getFullYear()}`;
}

module.exports = {
    formatDate
}