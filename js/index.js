function loadCategories() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById("list").innerHTML = this.responseText;
      const json = JSON.parse(this.responseText);
      const list = document.getElementById("list");
      for (let i = 0; i < json.data.length; i++) {
        list.innerHTML += `
           <li>
            <a
              href="/category.html?category=${
                json.data[i].category
              }&subCategory=${json.data[i].subCategory}"
              class="category"
            >
              <div class="icon">
                <img
                  src="https://s3.amazonaws.com/pocket-life-icons/${
                    json.data[i].icon
                  }"
                  alt=""
                />
              </div>
              <div class="title">
                <h3>${json.data[i].fullTitle}</h3>
              </div>
            </a>
          </li>
        `;
      }
    }
  };
  xhttp.open("GET", "https://app.872813.com/categories/get/home", true);
  xhttp.send();
}

loadCategories();
