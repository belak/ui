/**
 * Binary file size: 1024-step, "B" / "KB" / "MB" / "GB".
 * Returns "1.5 MB", "0 B", etc.
 */
export function formatSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0,
    size = bytes;
  while (size >= 1024 && i < units.length - 1) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}
