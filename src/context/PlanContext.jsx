"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

// Common box ta banalam
const PlanContext = createContext();

// Ek din e maximum koyta workout plan e rakha jabe
const MAX_PLAN = 5;

export function PlanProvider({ children }) {
  // Plan e ar Saved e shudhu workout er id gulo thakbe
  const [planIds, setPlanIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);

  // Kon kon workout "Done" hoyeche
  const [doneIds, setDoneIds] = useState([]);

  // localStorage theke data pora shesh hoyeche kina seta jante
  const [loaded, setLoaded] = useState(false);

  // Page prothom bar khulle localStorage theke purono data niye ashbe
  useEffect(() => {
    const oldPlan = localStorage.getItem("fitlog-plan");
    const oldSaved = localStorage.getItem("fitlog-saved");
    const oldDone = localStorage.getItem("fitlog-done");

    if (oldPlan) setPlanIds(JSON.parse(oldPlan));
    if (oldSaved) setSavedIds(JSON.parse(oldSaved));
    if (oldDone) setDoneIds(JSON.parse(oldDone));

    setLoaded(true);
  }, []);

  // Plan ba Saved bodlale notun data localStorage e save hobe
  useEffect(() => {
    // Purono data pora shesh na hole save korbo na, noile faka data diye overwrite hoye jabe
    if (loaded) {
      localStorage.setItem("fitlog-plan", JSON.stringify(planIds));
      localStorage.setItem("fitlog-saved", JSON.stringify(savedIds));
      localStorage.setItem("fitlog-done", JSON.stringify(doneIds));
    }
  }, [planIds, savedIds, doneIds, loaded]);

  // Plan e workout jog korar function
  function addToPlan(id) {
    const workoutId = String(id); // id ke text banalam jate number/text er jhamela na hoy

    if (planIds.includes(workoutId)) return "already";
    if (planIds.length >= MAX_PLAN) return "full";

    setPlanIds([...planIds, workoutId]);
    return "added";
  }

  // Saved e workout jog korar function
  function saveForLater(id) {
    const workoutId = String(id);

    if (savedIds.includes(workoutId)) return "already";

    setSavedIds([...savedIds, workoutId]);
    return "added";
  }

  // Plan theke workout soranor function
  function removeFromPlan(id) {
    const workoutId = String(id);
    setPlanIds(planIds.filter((item) => item !== workoutId));
    setDoneIds(doneIds.filter((item) => item !== workoutId));
  }

  // Saved theke workout soranor function
  function removeFromSaved(id) {
    const workoutId = String(id);
    setSavedIds(savedIds.filter((item) => item !== workoutId));
  }

  // Workout ke "Done" kora
  function markAsDone(id) {
    const workoutId = String(id);

    if (doneIds.includes(workoutId)) return "already";

    setDoneIds([...doneIds, workoutId]);
    return "done";
  }


  // Ja ja onno page gulo use korbe, shob ekta object e rakhlam
  const value = {
    planIds,
    savedIds,
    doneIds,
    maxPlan: MAX_PLAN,
    addToPlan,
    saveForLater,
    removeFromPlan,
    removeFromSaved,
    markAsDone,
  };

  return (
    <PlanContext.Provider value={value}>
      {children}
      {/* Toast notification gulo ekhane dekhabe */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#13151a",
            color: "white",
            border: "1px solid #23262e",
          },
        }}
      />
    </PlanContext.Provider>
  );
}

// Onno file theke box er data nite ei ta use korbo: const { planIds } = usePlan();
export function usePlan() {
  return useContext(PlanContext);
}
