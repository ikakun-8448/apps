document.getElementById("webhookForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = document.getElementById("url").value;
  const method = document.getElementById("method").value;
  const contentType = document.getElementById("contentType").value;
  const headers = document.getElementById("headers").value;
  const body = document.getElementById("body").value;

  try {
    const headersObject = headers ? JSON.parse(headers) : {};

    const response = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": contentType,
        ...headersObject
      },
      body: body
    });

    const responseText = await response.text();

    const responseContainer = document.getElementById("responseContainer");
    responseContainer.innerHTML = `
      <h2>レスポンス:</h2>
      <pre>${responseText}</pre>
    `;
  } catch (error) {
    console.error("Error sending webhook:", error);
    alert("Webhookの送信中にエラーが発生しました。");
  }
});

contentTypes.forEach((type) => {
  const option = document.createElement("option");
  option.value = type;
  option.text = type;
  contentTypeSelect.appendChild(option);
});
