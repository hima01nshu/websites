document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("adminToken");
  
    if (!token) {
      document.getElementById("messagesContainer").textContent = "Unauthorized. Please login again.";
      return;
    }
  
    async function fetchMessages() {
      try {
        const res = await fetch("/api/admin/messages", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`
          }
        });
  
        const data = await res.json();
  
        if (!res.ok) {
          throw new Error(data.message || "Failed to fetch messages.");
        }
  
        const container = document.getElementById("messagesContainer");
        container.innerHTML = ""; // Clear previous messages
  
        if (!Array.isArray(data) || data.length === 0) {
          container.innerHTML = "<p>No messages yet.</p>";
          return;
        }
  
        data.forEach(msg => {
          const div = document.createElement("div");
          div.classList.add("message");
          div.innerHTML = `
            <h4>${msg.name} (${msg.email})</h4>
            <p>${msg.message}</p>
            <hr/>
          `;
          container.appendChild(div);
        });
      } catch (err) {
        console.error("Error loading messages:", err);
        document.getElementById("messagesContainer").textContent = "Error loading messages.";
      }
    }
  
    fetchMessages();
  });
  