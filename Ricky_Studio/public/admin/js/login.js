document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
  
      const username = form.username.value.trim();
      const password = form.password.value.trim();
  
      try {
        const res = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
  
        const data = await res.json();
  
        if (res.ok && data.token) {
          localStorage.setItem("adminToken", data.token);
          window.location.href = "/admin/dashboard.html";
        } else {
          document.getElementById("status-message").textContent =
            data.message || "Login failed.";
        }
      } catch (err) {
        console.error("Login error:", err);
        document.getElementById("status-message").textContent =
          "Server error. Try again later.";
      }
    });
  });
  