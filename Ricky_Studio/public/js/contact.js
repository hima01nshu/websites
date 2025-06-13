document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const statusMessage = document.createElement("div");
    statusMessage.style.marginTop = "10px";
    form.appendChild(statusMessage);
  
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();
  
      // Basic validation
      if (!name || !email || !message) {
        showStatus("Please fill in all fields.", false);
        return;
      }
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, message })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          showStatus(data.message || "Message sent successfully!", true);
          form.reset();
        } else {
          showStatus(data.message || "Failed to send message.", false);
        }
      } catch (error) {
        console.error("Error:", error);
        showStatus("An error occurred. Please try again later.", false);
      }
    });
  
    function showStatus(msg, isSuccess) {
      statusMessage.textContent = msg;
      statusMessage.style.color = isSuccess ? "#4caf50" : "#e53935";
      statusMessage.style.fontWeight = "600";
    }
  });
  