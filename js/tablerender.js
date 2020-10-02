var table

fetch('users.json')
  .then(response => response.json())
  .then(data => renderTable(data));

function renderTable(data) {
  table = data
  let out = ''
  out += `<table id="ourtable"><thead>
    <tr><th>ID</th><th>Name</th><th>User Name</th><th>email</th></tr></thead><tbody>`
    data.forEach(element => {
      out += `<tr><td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.username}</td>
        <td>${element.email}</td>
        </tr>`
    });
  out += `</tbody></table>`
  
  document.getElementById('table').innerHTML = out
}