import { auth, db } from "./firebase.js";

import { signInWithEmailAndPassword, signOut } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { collection, addDoc, getDocs } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// LOGIN FUNCTION
window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log("Login clicked");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login Success ✅");
    window.location.href = "dashboard.html";
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};

// DASHBOARD LOGIC
window.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("customerForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      try {
        await addDoc(collection(db, "customers"), {
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          address: document.getElementById("address").value
        });

        alert("Saved ✅");
        loadData();

      } catch (error) {
        alert(error.message);
        console.log(error);
      }
    });

    loadData();
  }
});

// LOAD DATA
async function loadData() {
  const list = document.getElementById("list");
  if (!list) return;

  list.innerHTML = "";

  const data = await getDocs(collection(db, "customers"));

  data.forEach((doc) => {
    const li = document.createElement("li");
    li.innerText = doc.data().name + " - " + doc.data().phone;
    list.appendChild(li);
  });
}

// LOGOUT
window.logout = function () {
  signOut(auth);
};