let heading = document.getElementById("heading");
    let para = document.getElementById("para");
    let input = document.getElementById("textInput");

    document.getElementById("changeTextBtn").addEventListener("click", function () {
      heading.textContent = input.value || "Heading Changed!";
    });

    document.getElementById("bgColorBtn").addEventListener("click", function () {
      document.body.style.backgroundColor = "lightgreen";
    });

    document.getElementById("fontSizeBtn").addEventListener("click", function () {
      para.style.fontSize = "24px";
    });

    document.getElementById("toggleParaBtn").addEventListener("click", function () {
      if (para.style.display === "none") {
        para.style.display = "block";
      } else {
        para.style.display = "none";
      }
    });