const params = `&w=100&h=100&fit=crop&fm=jpg&q=95`;
const faves = saved.map(item => {
  return `
    <section style="background-image:url(${item.urls.regular}${params})" class="image">
      <i class="fas fa-1x fa-star favourite on" id="${item.id}"></i>
      <div class="details">
        <a href="${item.links.html}" target="_blank"><i class="fas fa-info-circle info"></i></a>
        <span>@${item.user.username.substr(0, 9)}</span>
      </div>
    </section>
  `;
})
.join('');
const favesHTML = faves.length ? faves : '<p>No favourites saved</p>'
imageContainer.innerHTML = '';
imageContainer.innerHTML = favesHTML;
generateFavourites('saved');