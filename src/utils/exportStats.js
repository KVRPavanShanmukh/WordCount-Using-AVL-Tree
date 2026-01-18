export function exportJSON(stats) {
  const blob = new Blob([JSON.stringify(stats, null, 2)], {
    type: "application/json"
  });
  download(blob, "stats.json");
}

export function exportCSV(stats) {
  const csv = Object.entries(stats)
    .map(([k, v]) => `${k},${v}`)
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv" });
  download(blob, "stats.csv");
}

function download(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
