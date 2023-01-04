async function getData() {
  // const url = `http://localhost:3000/books`;
  const url = `http://127.0.0.1:5501/books`;
  const res = await fetch(url);
  const data = await res.json();
  let rows = "";
  data.forEach((book) => {
    rows =
      rows +
      `<tr>
            <td scope="col">${book.id}</td>
            <td scope="col">${book.title}</td>
            <td scope="col">${book.author}</td>
            <td scope="col">${book.publisher}</td>
            <td scope="col">${book.numPages}</td>
            <td scope="col">${book.subject}</td>
            <td scope="col">${book.isbn}</td>
            <td scope="col">${book.availability}</td>
            <td ><button class="btn btn-primary" onclick="editBookData(${book.id})">Edit</button></td>
        <tr>`;
  });
  const tbodyElem = document.getElementById("tbody");
  tbodyElem.innerHTML = rows;
}
function editBookData(id) {
  location.href = `/bookForm.html?id=${id}`;
}

getData();
