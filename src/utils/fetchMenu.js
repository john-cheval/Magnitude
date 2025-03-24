import { fetchData } from "./fetchData";

export async function fetchMenus() {
  const [navDataLeft, navDataRight, mobileMenu] = await Promise.all([
    fetchData(
      "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/menu/primary"
    ),
    fetchData(
      "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/menu/primaryright"
    ),
    fetchData(
      "https://chevaldemo.xyz/demo/magnitude/wp-json/custom/v1/menu/mobilemenu"
    ),
  ]);

  return { navDataLeft, navDataRight, mobileMenu };
}
