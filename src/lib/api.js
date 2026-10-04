const API_URL = "https://api.abcz.workers.dev/api/fitlog";
// const API_URL = "https://api.api-store.workers.dev/api/fitlog";

// Sob workout internet theke ante
export async function getAllWorkouts() {
  const response = await fetch(API_URL);

  // Server thik uttor na dile error dekhabo
  if (!response.ok) {
    throw new Error("Workout data ana jayni..!!");
  }

  const data = await response.json();
  return data;
}
