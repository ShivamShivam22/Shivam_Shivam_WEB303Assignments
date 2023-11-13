$(document).ready(function () {
    $.ajax({
       url: 'data/characters.json',
       dataType: 'json',
       success: function (data) {
          populateTable(data);
 
          $('#search').on('input', function () {
             searchByName(data);
          });
          $('#filter-am').on('click', function () {
             filterByLastName(data, 'A', 'M');
          });
 
          $('#filter-nz').on('click', function () {
             filterByLastName(data, 'N', 'Z');
          });
       },
       error: function (error) {
          console.log('Error loading data:', error);
       }
    });

    function populateTable(characters) {
       var table = $('#character-table');
       table.empty();
 
       var headerRow = $('<tr>');
       headerRow.append('<th>First Name</th>');
       headerRow.append('<th>Last Name</th>');
       headerRow.append('<th>Age</th>');
       headerRow.append('<th>Occupation</th>');
       headerRow.append('<th>Status</th>');
       table.append(headerRow);
 
       characters.forEach(function (character) {
          var row = $('<tr>');
          row.append('<td>' + character.firstName + '</td>');
          row.append('<td>' + character.lastName + '</td>');
          row.append('<td>' + character.age + '</td>');
          row.append('<td>' + character.occupation + '</td>');
          row.append('<td>' + character.status + '</td>');
          table.append(row);
       });
    }
 
function searchByName(characters) {
    var searchTerm = $('#search').val().toLowerCase();
 
    $('#character-table tr').each(function () {
       var row = $(this);
       var firstName = row.find('td:first').text().toLowerCase();
 
       if (firstName.includes(searchTerm)) {
          row.addClass('search-highlight');
       } else {
          row.removeClass('search-highlight');
       }
    });
 }
 
function filterByLastName(characters, startRange, endRange) {
    var filteredCharacters = characters.filter(function (character) {
       var lastNameFirstLetter = character.lastName.charAt(0).toUpperCase();
       return lastNameFirstLetter >= startRange && lastNameFirstLetter <= endRange;
    });
 
    $('#filter-am').text('A - M (' + filteredCharacters.length + ')');
    $('#filter-nz').text('N - Z (' + (characters.length - filteredCharacters.length) + ')');
 
    $('#character-table tr').each(function () {
       var row = $(this);
       var lastNameFirstLetter = row.find('td:nth-child(2)').text().charAt(0).toUpperCase();
 
       if ((startRange <= lastNameFirstLetter && lastNameFirstLetter <= endRange) ||
          (filteredCharacters.length === 0)) {
          row.show();
       } else {
          row.hide();
       }
    });
 }
 });
 