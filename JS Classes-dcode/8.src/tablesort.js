/**
 * Sorts a HTML table
 * 
 * @param {HTMLTableElement} table The table to sort
 * @param {number} column The index of the column to sort
 * @param {boolean} asc Determines if the sorting wiil be in ascending order
 */


function sortTableByColumn(table, column, asc = true) {
    const dirModifier = asc ? 1 : -1;
    // this is unfortunately only gonna work when you have a single table body element inside youe table
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    // Sort each row
    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector
    });
}

sortTableByColumn(document.querySelector("table"), 1);