"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@nextui-org/react";
import { Input } from "@nextui-org/react";
import styles from "./goal-record.module.css";

const GoalRecord = ({ prevMonthRecord, currentMonthRecord }) => {
  const [goal, setGoal] = useState(10);
  const [edit, setEdit] = useState(false);
  const [goalMillisec, setGoalMillisec] = useState(goal * 3600000);
  const [isInvalid, setIsInvalid] = useState(false);

  const editGoal = () => {
    if (isInvalid) {
      setEdit(true);
    } else {
      setEdit(!edit);
    }
  };

  const putTheGoal = (value) => {
    if (isNaN(value)) {
      setIsInvalid(true);
    } else {
      setGoal(value);
      setIsInvalid(false);
    }
  };

  useEffect(() => {
    // h * 60 * 60 * 1000
    const goalConvertoSecond = goal * 3600000;
    setGoalMillisec(goalConvertoSecond);
  }, [goal]);

  return (
    <div className={styles.container}>
      <div className={styles.goalbox}>
        <div className={styles.goalTitle}>Goal</div>
        {edit !== true ? (
          <div className={styles.goalHours}>{goal} hours</div>
        ) : (
          <Input
            type="text"
            variant={"underlined"}
            placeholder="only Hours"
            onChange={(e) => putTheGoal(e.target.value)}
            minLength={0}
            maxLength={3}
            isInvalid={isInvalid}
            errorMessage="Please enter only number"
            className="max-w-[190px]"
          />
        )}
        <div className={styles.goalEditBtn} onClick={editGoal}>
          edit
        </div>
      </div>
      <div className={styles.goalRecordBox}>
        <Progress
          label="Reach towards the Goal"
          size="ml"
          value={currentMonthRecord}
          maxValue={goalMillisec}
          color="success"
          showValueLabel={true}
        />
      </div>
      <div className={styles.goalRecordBox}>
        <Progress
          label="Compared to Last Month"
          size="ml"
          value={currentMonthRecord}
          maxValue={prevMonthRecord}
          color="success"
          showValueLabel={true}
        />
      </div>
    </div>
  );
};

export default GoalRecord;
