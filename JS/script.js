// =========================================
// Epic Nova Website Script
// =========================================

// ---------------------------
// Load Shared Navigation
// ---------------------------

const navbar = document.getElementById("navbar");

if (navbar) {
  fetch("components/nav.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to load navigation.");
      }
      return response.text();
    })
    .then(html => {
      navbar.innerHTML = html;
    })
    .catch(error => console.error(error));
}

// ---------------------------
// Load Shared Footer
// ---------------------------

const footer = document.getElementById("footer");

if (footer) {
  fetch("components/footer.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Unable to load footer.");
      }
      return response.text();
    })
    .then(html => {
      footer.innerHTML = html;
    })
    .catch(error => console.error(error));
}

// =========================================
// Demo Player Profile
// =========================================

const playerProfile = {

  username: "NovaRift_87",

  initials: "NR",

  level: 12,

  rank: "Elite Nova Core Member",

  badge: "ELITE",

  status: "ONLINE",

  energy: 72,

  stash: {

    bits: 1250,

    shards: 84,

    cores: 12

  }

};

// =========================================
// Update Player Card
// =========================================

const username = document.getElementById("profile-username");

if (username) {
  username.textContent = playerProfile.username;
}

const rank = document.getElementById("profile-rank");

if (rank) {
  rank.textContent =
    `Level ${playerProfile.level} • ${playerProfile.rank}`;
}

const avatar = document.getElementById("profile-avatar");

if (avatar) {
  avatar.textContent = playerProfile.initials;
}

const badge = document.getElementById("profile-badge");

if (badge) {
  badge.textContent = playerProfile.badge;
}

const status = document.getElementById("profile-status");

if (status) {
  status.textContent = playerProfile.status;
}

// =========================================
// Currency Display
// =========================================

const bitCount = document.getElementById("nova-bit-count");

if (bitCount) {
  bitCount.textContent =
    playerProfile.stash.bits.toLocaleString();
}

const shardCount = document.getElementById("nova-shard-count");

if (shardCount) {
  shardCount.textContent =
    playerProfile.stash.shards.toLocaleString();
}

const coreCount = document.getElementById("nova-core-count");

if (coreCount) {
  coreCount.textContent =
    playerProfile.stash.cores.toLocaleString();
}

// =========================================
// Energy Bar
// =========================================

const energyFill = document.querySelector(".fill");

if (energyFill) {
  energyFill.style.width = playerProfile.energy + "%";
}

const energyText = document.getElementById("energy-percent");

if (energyText) {
  energyText.textContent =
    playerProfile.energy + "%";
}

console.log("Epic Nova initialized successfully.");