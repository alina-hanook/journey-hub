const BASE = 'http://localhost:3000/journeys';

export const getJourneys = async () => {
  const res = await fetch(BASE);
  return res.json();
};

export const getJourneyById = async (id) => {
  const res = await fetch(`${BASE}/${id}`);
  return res.json();
};

export async function addJourney(data) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export const updateJourney = async (id, data) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteJourney = async (id) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'DELETE',
  });
  return res.json();
};
