/*
    Assignment 05
*/
class ContentItem {
    constructor(id, name, description, categoryGenre) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.categoryGenre = categoryGenre;
    }
updateContentItem(id, name, description, categoryGenre) {
    if (id === this.id) {
    if (name !== null) this.name = name;
        if (description !== null) this.description = description;
        if (categoryGenre !== null) this.categoryGenre = categoryGenre;
      }
    }
    toString() {
      return `
        <div class="content-item-wrapper" id="content-item-${this.id}">
          <h2>${this.name}</h2>
          <p>${this.description}</p>
          <div>${this.categoryGenre}</div>
        </div>`;
    }
  }
  const contentItems = [
    new ContentItem(0, 'Valse Sentimentale', 'Music by Piotr Ilyich Tchaikovsky which tanslate Sentimental waltz in english', 'Classical Music'),
    new ContentItem(1, 'When it started', 'Indie Music by The strokes, one of the most rock popular band of 2000s.', 'Rock-Indie,'),
    new ContentItem(2, 'Marriage of Figaro', 'An Opera by Wolfganf Amadeus Mozart', 'Opera'),
    new ContentItem(3, 'Veridis Quo', 'An electronic music by a really popular dj Daft Punk', 'Synth-Electronic'),
    new ContentItem(4, 'Stayin Alive', '70s Music by a popular band Bee Gees', 'Disco-Rock'),
  ];
  $('.theme-title').text('favourite'); 
  contentItems.forEach((item) => {
    $('#content-item-list').append(item.toString());
    const contentItemWrapper = $(`#content-item-${item.id}`);
    contentItemWrapper.css({
      border: '1px solid #000',
      width: '300px',
      padding: '10px',
      margin: '20px auto',
    });
  });
  $('#update-successful').on('click', function () {
    contentItems[0].updateContentItem(0, 'Do i wanna Know', 'Music By A famous Band Artic Monkeys', 'Alternative-Indie');
    $(`#content-item-0`).html(contentItems[0].toString());
  });
  
  $('#update-unsuccessful').on('click', function () {
    contentItems[1].updateContentItem(2, 'Dancing in the Moodlight', 'Vibing song by Toploaders', 'Adult Contemporary');
});


