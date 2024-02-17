import Link from "next/link";
import styles from "./page.module.css";

const Category = () => {
  const list = [
    { id: 1, content: "📚 독서 시간을 기록해보세요", category: "reading" },
    { id: 2, content: "📝 공부 시간을 기록해보세요", category: "study" },
    { id: 3, content: "🏋🏻 운동 시간을 기록해보세요", category: "workout" },
    { id: 4, content: "👩🏻‍🍳 요리 시간을 기록해보세요", category: "cook" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.title}>오늘의 기록을 측정해보세요!</div>
      {list.map((item) => {
        return (
          <>
         
          <div className={styles.categoryLine}>
          <Link href="/stopwatch"> {item.content} </Link>
          </div>
         
          </>
        )
      })}
    </div>
  );
};

export default Category;
