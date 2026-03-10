function PostCount({ count }) {
  // return JSX เพื่อแสดงผลบนหน้าเว็บ
  return <p>โพสต์ทั้งหมด: {count} รายการ</p>; // แสดงจำนวนโพสต์ รับค่าจาก props ชื่อ count
}

export default PostCount;
