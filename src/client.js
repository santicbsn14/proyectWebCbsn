import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'j89bfyfx',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-11-30', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPosts() {
  const posts = await client.fetch('*[_type == "novedad"]')
  const fechaActual = new Date();
  const fechaLimite = new Date(fechaActual);
  fechaLimite.setDate(fechaLimite.getDate() - 333);
  const postsFiltrados = posts.filter(post => {
    const fechaPost = new Date(post.newsDatetime);
    return fechaPost >= fechaLimite;
  });
  
  return postsFiltrados
}

export async function getPostBySearch(title) {
  const posts = await client.fetch(`*[_type == "novedad" && title match "${title}"] `)
  
  return posts
}

export async function getPostById(id) {
  
    const post = await client.getDocument(id)
    const imagenesRefs = post.imagenes.map(imagen => imagen.asset._ref)
    
    let newsBody = await post.newsBody[0].children[0].text
    return {
      title: post.title,
      newsDatetime: post.newsDatetime,
      description: post.description,
      category: post.category,
      topics:post.topics,
      newsBody:newsBody,
      status: post.status,
      id: post._id,
      imagenes:imagenesRefs
  }
}
export async function createPost(post) {
  const result = client.create(post)
  return result
}
export async function updateDocumentTitle(_id, title) {
  const result = client.patch(_id).set({title})
  return result
}

const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)
}

export async function getSchedules() {
  const posts = await client.fetch('*[_type == "sport" ]')

  return posts
}
export const getEventsFromSanity = async () => {
  const query = `*[_type == "sportEvent"]{
    _id,
    title,
    date,
    tournament,
    location,
    locationType,
    "sport": sport->{name}
  } | order(date asc)`;
  
  return await client.fetch(query);
}
export const getWeeklySchedules = async () => {
  const query = `*[_type == "weeklySchedule"] | order(startDate desc) {
    _id,
    title,
    startDate,
    endDate,
    "coverImage": coverImage.asset->url,
    "events": *[_type == "sportEvent" && section._ref == ^._id] | order(date asc) {
      _id,
      title,
      date,
      location,
      locationType,
      tournament,
      "sport": sport->{name}
    }
  }`;

  return await client.fetch(query);
};
export const getAgendaById = async (id) => {
  const query = `*[_type == "weeklySchedule" && _id == $id][0] {
    _id,
    title,
    startDate,
    endDate,
    "coverImage": coverImage.asset->url,
    "events": *[_type == "sportEvent" && section._ref == ^._id] | order(date asc) {
      _id,
      title,
      date,
      location,
      locationType,
      tournament,
      "sport": sport->{name}
    }
  }`;

  return await client.fetch(query, { id });
};
export const getOcupaciones = () =>
  client.fetch(`
    *[_type == "ocupacion"]{
      "id": _id,
      fecha,
      horaInicio,
      horaFin,
      actividad,
      deporte,
      organizador,
      espacio->{ nombre }
    } | order(fecha asc, horaInicio asc)
  `);



