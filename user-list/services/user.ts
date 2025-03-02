export const getUsers = async (username = '') => {
  const response = await fetch(`https://api.github.com/search/users?q=${username}`);
  const data = await response.json();
  return data
}