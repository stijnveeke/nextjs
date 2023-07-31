export default function combineClasses(
  classes: Object,
  state?: "hover" | "focus" | "active"
) {
  return Object.entries(classes)
    .map(([key, value]) => {
      return state ? state + ":" + value.toString() : value.toString();
    })
    .join(" ");
}
