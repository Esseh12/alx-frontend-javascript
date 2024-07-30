export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    const map1 = array.map((obj) => obj.id);
    return (map1);
  }
  return [];
}
