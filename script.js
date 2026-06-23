const playerStash = {
  bits: 1250,
  shards: 84,
  cores: 12
};

document.getElementById("nova-bit-count").textContent =
  playerStash.bits.toLocaleString();

document.getElementById("nova-shard-count").textContent =
  playerStash.shards.toLocaleString();

document.getElementById("nova-core-count").textContent =
  playerStash.cores.toLocaleString();