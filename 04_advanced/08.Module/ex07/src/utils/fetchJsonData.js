export async function fetchJsonData(url) {
  const response = await fetch(url);
  return response.json();
}