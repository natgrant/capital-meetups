import request from "superagent";

export function getUsersByEventApi(eventId) {
  return request.get(`/api/v1/users/event/${eventId}`).then(res => res.body);
}
