$(document).ready(function () {
   let charactersData;

   $.ajax({
       url: '/data/characters.json',
       dataType: 'json',
       success: function (data) {
           charactersData = data;
           buildTable();
       },
       error: function (error) {
           console.log('Error loading data:', error);
       }
   });

   function buildTable() {
       const table = $('#character-table');

       table.empty();
       const headings = Object.keys(charactersData[0]);
       const headingRow = $('<tr>');
       headings.forEach((heading) => {
           headingRow.append(
               `<th><a href="#" data-sort="${heading}">${heading}</a> <span class="chevron"></span></th>`
           );
       });
       table.append(headingRow);

       charactersData.forEach((character) => {
           const row = $('<tr>');
           headings.forEach((heading) => {
               row.append(`<td>${character[heading]}</td>`);
           });
           table.append(row);
       });

       $('th a').on('click', function () {
           const heading = $(this).data('sort');
           sortTable(heading);
       });
   }

   function sortTable(heading) {
       const currentOrder = $(`[data-sort="${heading}"]`).hasClass('asc')
           ? 'desc'
           : 'asc';

       $('th a').removeClass('asc desc');
       $(`[data-sort="${heading}"]`).addClass(currentOrder);

       $('.chevron').html('');

       const chevron = currentOrder === 'asc' ? '&#x25B2;' : '&#x25BC;';
       $(`[data-sort="${heading}"]`).find('.chevron').html(chevron);

       charactersData.sort((a, b) => {
           const aValue = a[heading];
           const bValue = b[heading];

           if (typeof aValue === 'number' && typeof bValue === 'number') {
               return currentOrder === 'asc' ? aValue - bValue : bValue - aValue;
           } else {
               return currentOrder === 'asc'
                   ? aValue.toString().localeCompare(bValue)
                   : bValue.toString().localeCompare(aValue);
           }
       });
       buildTable();
   }
});
