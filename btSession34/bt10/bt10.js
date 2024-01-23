var exampleDiv = document.getElementById("example");

    // Sử dụng innerText
    console.log(exampleDiv.innerText);
    exampleDiv.innerText = "New text";

    // Sử dụng textContent
    console.log(exampleDiv.textContent);
    exampleDiv.textContent = "Modified text";

    // Sử dụng innerHTML
    console.log(exampleDiv.innerHTML);
    exampleDiv.innerHTML = "<p>Modified text</p>";