import * as htmlToImage from "html-to-image";

let page = document.querySelector("main");

function test(name, element) {
  if (element === "h1") {
    page.innerHTML = `<h1>${name}</h1>`;
    return;
  } else if (element === "p") {
    page.innerHTML = `<p>${name}</p>`;
  }
}

document.querySelector("#articles").addEventListener("click", () => {
  console.log("ok");

  page.innerHTML = `  <h1>Bienvenu</h1>
   
    <p>Bonjour, bla bla bla</p>
    <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>

    </div>
    <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
      
    </div>
    <div class="card">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.</p>
       
    </div>
`;
});

function b64toBlob(dataURI) {
  var byteString = atob(dataURI.split(",")[1]);
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);

  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ab], { type: "image/png" });
}

var node = document.querySelector("html");

htmlToImage
  .toPng(node)
  .then(function (dataUrl) {
    var img = new Image();
    img.src = dataUrl;
    var blob = b64toBlob(dataUrl);
    const blobURL = URL.createObjectURL(blob);
    document.body.appendChild(img);
    let link = document.createElement("a");

    link.href = blobURL;
    link.download = "test.png";

    link.click();
  })
  .catch(function (error) {
    console.error("oops, something went wrong!", error);
  });
