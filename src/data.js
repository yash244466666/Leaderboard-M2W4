const populateList = (obj, ul) => {
  const users = obj.result;
  users.forEach((user) => {
    ul.insertAdjacentHTML('beforeend',
      `<li class="leaderboard-item" data-score=${user.score}>`
      + `${user.user} : ${user.score}`
    + '</li>');
  });
};

export const loadList = async (gameId, ul) => {
  const requestURL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const request = new Request(requestURL);
  const response = await fetch(request);
  const users = await response.json();
  populateList(users, ul);
};

const addData = async (gameId, obj) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  };
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

const addToList = (obj, ul) => {
  ul.insertAdjacentHTML('beforeend',
    `<li class="leaderboard-item" data-score=${obj.score}>`
  + `${obj.user} : ${obj.score}`
+ '</li>');
};
/* eslint-disable */
export const add = (gameId, obj, ul) => {
  addData(gameId, obj)
    .then(() => {
      addToList(obj, ul);
    })
    .catch((error) => {
    });
};
/* eslint-enable */
export const sortList = (list) => {
  const listItems = list.getElementsByTagName('li');
  const listItemsArray = Array.from(listItems);
  listItemsArray.sort((a, b) => {
    const scoreA = parseInt(a.dataset.score, 10);
    const scoreB = parseInt(b.dataset.score, 10);
    return scoreB - scoreA;
  });

  list.innerHTML = '';

  listItemsArray.forEach((item) => {
    list.appendChild(item);
  });
};
