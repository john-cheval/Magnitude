import { baseUrl } from "./apiUrl";

async function generateMetadataData(id, path, slug = false) {
  try {
    const res = await fetch(
      `${baseUrl}/full_details_meta?${slug ? "slug" : "ID"}=${id}`
    );
    const data = await res.json();

    const title = data?.meta_title || "Magnitude";
    const description = data?.meta_description || "Magnitude";
    const image =
      data?.meta_image ||
      "http://static1.squarespace.com/static/65d8c5a5fdf9565d93b4e97c/t/65d8c5a8fdf9565d93b4eb16/1708089904323/mag_background_-_Copy-removebg-preview.png?format=1500w";

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.magnitudeyachts.com/${path}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.magnitudeyachts.com/${path}`,
        type: "website",
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "Magnitude",
      description: "Magnitude",
      openGraph: {
        title: "Magnitude",
        description: "Magnitude",
        images: [
          {
            url: "http://static1.squarespace.com/static/65d8c5a5fdf9565d93b4e97c/t/65d8c5a8fdf9565d93b4eb16/1708089904323/mag_background_-_Copy-removebg-preview.png?format=1500w",
            width: 1200,
            height: 630,
            alt: "ChevalMe Web Developers in Dubai",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [
          "http://static1.squarespace.com/static/65d8c5a5fdf9565d93b4e97c/t/65d8c5a8fdf9565d93b4eb16/1708089904323/mag_background_-_Copy-removebg-preview.png?format=1500w",
        ],
      },
    };
  }
}

export default generateMetadataData;
