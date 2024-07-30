export default function getStudentsByLocation(students, city) {
  const filter1 = students.filter((obj) => city === obj.location);
  return filter1;
}
