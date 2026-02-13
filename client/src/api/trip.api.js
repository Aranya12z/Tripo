import api from "./axios";

export const saveTripFlow = async (tripId, payload) => {
  return api.put(`/trips/${tripId}/flow`, payload);
};

export const getTripFlow = async (tripId) => {
  return api.get(`/trips/${tripId}/flow`);
};
