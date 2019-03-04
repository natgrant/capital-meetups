import request from "superagent";

export function getAllEvents() {
  return request.get("/api/v1/meetups").then(res => res.body);
}

export function getAllCategories() {
  return request.get("/api/v1/meetups/categories").then(res => res.body);
}

export function getOneEvent(id) {
  console.log(id);
  return request.get(`/api/v1/meetups/event/${id}`).then(res => res.body);
}

export function getOneEventMembers(id) {
  console.log(id);
  return request(`/api/v1/meetups/members/${id}`).then(res => res.body);
}
