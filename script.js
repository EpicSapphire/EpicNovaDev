const playerProfile = {
  username: "NovaRift_87",
  initials: "NR",
  level: 12,
  rank: "Elite Nova Core Member",
  status: "ONLINE",
  energy: 72,

  stash: {
    bits: 1250,
    shards: 84,
    cores: 12
  }
};

document.getElementById("nova-bit-count").textContent =
  playerProfile.stash.bits.toLocaleString();

document.getElementById("nova-shard-count").textContent =
  playerProfile.stash.shards.toLocaleString();

document.getElementById("nova-core-count").textContent =
  playerProfile.stash.cores.toLocaleString();

fetch("components/nav.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });