const btnElem = document.querySelector("#save-btn");
btnElem.addEventListener("click", saveBook);
const str = location.href.split("?")[1];
const id = str.split("=")[1];
function saveBook() {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const publisher = document.querySelector("#publisher").value;
  const numPages = document.querySelector("#numPages").value;
  const subject = document.querySelector("#subject").value;
  const isbn = document.querySelector("#isbn").value;
  const availabilityRadios = document.getElementsByName("availability");
  let availability;
  availabilityRadios.forEach((radio) => {
    if (radio.checked) {
      availability = radio.value;
    }
  });
  const data = {
    title,
    author,
    publisher,
    numPages,
    subject,
    isbn,
    availability,
  };
  const url = `http://localhost:3000/books`;
  const method = "POST";
  fetch(url, {
    method,
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status == 201) {
      alert("Book Saved Successfully");
    }
  });
}

async function getDataToBeEdited(id) {
  const url = `http://localhost:3000/books/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  document.querySelector("#title").value = data.title;
  document.querySelector("#author").value = data.author;
  document.querySelector("#publisher").value = data.publisher;
  document.querySelector("#numPages").value = data.numPages;
  document.querySelector("#subject").value = data.subject;
  document.querySelector("#isbn").value = data.isbn;
}

if (id) {
  getDataToBeEdited(id);
}
