document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("messages");
    const password = prompt("Enter admin password:");
  
    try {
      const res = await fetch(`/api/admin/messages?auth=${password}`);
      const data = await res.json();
  
      if (!res.ok) {
        container.innerHTML = `<p class="error">${data.message}</p>`;
        return;
      }
  
      if (data.length === 0) {
        container.innerHTML = "<p>No messages found.</p>";
        return;
      }
  
      data.forEach(msg => {
        const div = document.createElement("div");
        div.className = "message";
        div.innerHTML = `
          <p><strong>Name:</strong> ${msg.name}</p>
          <p><strong>Email:</strong> ${msg.email}</p>
          <p><strong>Message:</strong> ${msg.message}</p>
          <p><small><strong>Submitted on:</strong> ${new Date(msg.createdAt).toLocaleString()}</small></p>
        `;
        container.appendChild(div);
      });
    } catch (err) {
      console.error(err);
      container.innerHTML = `<p class="error">Failed to load messages.</p>`;
    }
  });
  