function sendMessage() {
    var chatbox = document.getElementById("chatbox");
    var userMessage = document.getElementById("userMessage").value;
    if (userMessage.trim() === "") return;
    chatbox.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
    chatbox.innerHTML += `<p><strong>Stany:</strong> I'm here for you!</p>`;
    document.getElementById("userMessage").value = "";
}