var table

fetch('users.json')
  .then(response => response.json())
  .then(data => renderTable(data));

function renderTable(data) {
  table = data
  let out = ''
  out += `<table id="ourtable"><thead>
  <tr><th>ID</th><th>Name</th><th>User Name</th><th>email</th></tr></thead><tbody>`
  out += data.map(element => {
    return `<tr><td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.username}</td>
      <td>${element.email}</td>
      </tr>`
  }).join('');
  out += `</tbody></table>`
  console.log(out)
  document.getElementById('table').innerHTML = out
}