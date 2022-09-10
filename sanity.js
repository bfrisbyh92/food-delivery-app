import { SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = new SanityClient({
    projectId: "sm2pmvgc",
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21",
});

const builder = imageUrlBuilder(client);
export const UrlFor = (source) => builder.image(source);

// ALWAYS MAKE SURE CORS POLICY WITH ALL PARTIES ARE ALLOWING THE EXCHANGE OF INFORMATION 
// -- SANITY.IO NEEDS TO ACCEPT CORS POLICY

export default client;