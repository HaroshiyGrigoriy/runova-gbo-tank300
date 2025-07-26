export async function sendApp(formData){
  const response = await fetch("http://localhost:8080/sendApp",{
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formData)
  });
  if (!response.ok) {
    const data = await response.arrayBuffer.json();
    throw new Error (data.message || "Ошибка отправки");
  }
}