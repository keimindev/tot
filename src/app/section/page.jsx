'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { useRecoilState } from "recoil";
import { sectionState } from "@/recoil/sectionAtom";



const Section = () => {
  const list = [
    { id: 1, content: "📚 Record your reading time", category: "Reading" },
    { id: 2, content: "📝 Record your study time", category: "Study" },
    { id: 3, content: "🏋🏻 Record your workout time", category: "Workout" },
    { id: 4, content: "👩🏻‍🍳 Record your cooking time", category: "Cook" },
    { id: 5, content: "🎨 Record your drawing time", category: "Draw" },
  ];


  const [section, setSection] = useRecoilState(sectionState)

  return (
    <div className={styles.container}>
      <div className={styles.title}>Let&apos;s record your day!</div>
      {list.map((item) => {
        return (
          <>
          <div key={item.content} className={styles.categoryLine} onClick={() => setSection(item.category)}>
          <Link href="/stopwatch"> {item.content} </Link>
          </div>
         
          </>
        )
      })}
    </div>
  );
};

export default Section;
