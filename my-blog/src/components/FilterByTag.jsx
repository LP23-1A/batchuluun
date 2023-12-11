export default function FilterByTags(arr, tag) {
  return arr.filter((d) => d.tag_list.some((c) => c.includes(tag)));
}
