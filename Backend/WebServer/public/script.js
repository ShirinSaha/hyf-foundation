async function getUserCount() {
    const response = await fetch("/user-count");
    const data = await response.json();
    document.getElementById("user-count").textContent = data.count;
}

getUserCount();
