export function formatMembers(count: number) {
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k members`;
  }

  return `${count} members`;
}

export function todayLabel() {
  return new Intl.DateTimeFormat("en-KE", {
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(new Date());
}
