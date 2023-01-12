"use strict";

const id = document.getElementById('id')
const pwd = document.getElementById('pass')
const login = () => {
  const idValue = id.value
  const pwdValue = pwd.value
  if( idValue === 'user' && pwdValue === 'password'){
    location.href = idValue + pwdValue + ".html";
  }else {
    alert('idまたはpassowrdが間違っています。')
  }
}
if(id){
  document.getElementById('button').addEventListener('click', () => login());
}


const getYouTubeData = () => {
  return $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: 'AIzaSyC5jX1GMVmJzKGHYBilpohaQsljfQvBCYU',
      channelId: 'UCoFLB_Gw_AoxUuuzKjXrc_Q',
      maxResults: 5,
      order: 'date',
    },
    error: () => {
      console.error('YouTube動画情報を取得できませんでした。');
    }
  });
}

getYouTubeData().done(function(data) {
  const items = data.items;
  const html = [];
  items.forEach(function(item) {
    const videoId = item.id.videoId;
    html.push(`
      <li>
        <iframe width="280" height="157" src="https://www.youtube.com/embed/${videoId}"></iframe>
      </li>
    `);
  });
  $('#result').html(html.join(''));
});

